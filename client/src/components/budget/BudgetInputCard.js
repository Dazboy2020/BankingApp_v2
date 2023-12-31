import { useState } from 'react';
import { useAppContext } from '../../context/context';
import { useModalContext } from '../../context/modalContext';
import {
	Box,
	Button,
	Card,
	CardContent,
	FormControl,
	Stack,
	TextField,
} from '@mui/material';

function BudgetInputCard() {
	const { budget, dispatch } = useAppContext();
	const { setOpenToast, message, setMessage } = useModalContext();
	const [formBudget, setFormBudget] = useState(null);

	function handleFormSubmit(e) {
		e.preventDefault();
		return;
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (formBudget === null || isNaN(formBudget) || formBudget <= 0) {
			setMessage('Please enter a valid budget!');
			setOpenToast(true, { message: message });
			return;
		}

		dispatch({ type: 'user/AddBudget', payload: formBudget });
		setMessage('Budget Successfully updated!');
		setOpenToast(true, { message: message });
	}

	function handleBudgetChange(e) {
		const budgetInput = +e.target.value;

		if (isNaN(budgetInput)) {
			setMessage('Budget must be an integer!');
			setOpenToast(true, { message: message });
			setFormBudget(null);
			return;
		}
		setFormBudget(budgetInput);
	}

	return (
		<Stack
			direction={{ sm: 'column', md: 'row' }}
			sx={{
				justifyContent: { sm: 'flex-start', md: 'center' },
				ml: { xs: 3, sm: 6 },
				mr: { xs: 3, sm: 6 },
				mt: { xs: 5, md: 10 },
			}}
		>
			<Card
				component="main"
				sx={{
					width: '100%',
					height: { xs: '100%', s: '100%', sm: '75%' },
					justifyContent: 'center',
					alignItems: 'center',

					mt: { xs: 3, md: 6 },
				}}
			>
				<CardContent>
					<Box
						component="form"
						sx={{
							textAlign: 'center',
							'& .MuiTextField-root': {
								m: 1,
								width: { sxsm: '15ch', md: '50ch', s: '99%', xs: '99%' },
								mt: { xs: 3, md: 10 },
							},
						}}
						noValidate
						autoComplete="off"
						onSubmit={(e) => handleFormSubmit(e)}
					>
						<FormControl sx={{ display: 'flex' }}>
							<TextField
								id="Monthly Budget"
								label="Monthly Budget"
								defaultValue={budget}
								color="secondary"
								disabled={false}
								onChange={handleBudgetChange}
							/>
							<Button
								type="submit"
								color="secondary"
								onClick={(e) => handleSubmit(e)}
							>
								+
							</Button>
						</FormControl>
					</Box>
				</CardContent>
			</Card>
		</Stack>
	);
}

export default BudgetInputCard;
