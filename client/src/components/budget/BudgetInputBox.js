import { useState } from 'react';
import { useAppContext } from '../../context/context';
import { useModalContext } from '../../context/modalContext';
import { Box, Button, FormControl, TextField } from '@mui/material';
import ProgressBarComponent from '../ProgressBar/ProgressBar';
import { useDarkMode } from '../../hooks/useDarkMode';
import useAddBudget from '../../hooks/useAddBudget';

function BudgetInputBox() {
	const { budget, dispatch, state } = useAppContext();
	const { isDarkMode } = useDarkMode();
	const { setOpenToast, message, setMessage } = useModalContext();
	const [formBudget, setFormBudget] = useState(null);
	const { addBudget } = useAddBudget();

	const formStyling = {
		'& .MuiInputLabel-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			fontSize: '10px',
		},
		'& .MuiInputBase-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			height: '45px',
		},
		'& .MuiFormHelperText-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiOutlinedInput-root': {
			'& > fieldset': {
				borderColor: isDarkMode ? 'silver' : '#000',
				borderRadius: 1,
				color: isDarkMode ? '#d6d3d1' : '#000',
			},
		},
		'& .MuiFormLabel-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'&.MuiFormLabel-colorSecondary': {
			color: 'secondary',
		},
		'&.MuiInputBase-inputAdornedEnd': {
			color: 'white',
		},

		color: isDarkMode ? '#d6d3d1' : '#000',
	};

	function handleFormSubmit(e) {
		e.preventDefault();
		return;
	}

	function handleSubmit(e) {
		e.preventDefault();

		const userId = state._id;

		if (formBudget === null || isNaN(formBudget) || formBudget <= 0) {
			setMessage('Please enter a valid budget!');
			setOpenToast(true, { message: message });
			return;
		}

		dispatch({ type: 'user/AddBudget', payload: formBudget });

		addBudget(userId, formBudget);
	}

	function handleBudgetChange(e) {
		const budgetInput = +e.target.value;

		if (isNaN(budgetInput)) {
			setMessage('Budget must be an integer!');
			setOpenToast(true, { message: message });
			return;
		}
		setFormBudget(budgetInput);
	}

	function displayProgressBar() {
		if (+budget === null) return null;

		return <ProgressBarComponent />;
	}

	return (
		<Box
			component="form"
			sx={{
				textAlign: 'center',
				'& .MuiTextField-root': {
					m: 1,
					width: { xs: '99%', s: '99%', md: '20ch' },
				},
				fontSize: '10px',
			}}
			noValidate
			autoComplete="off"
			onSubmit={(e) => handleFormSubmit(e)}
		>
			<FormControl
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'baseline',
				}}
			>
				<TextField
					id="Monthly Budget"
					label="Monthly Budget"
					// defaultValue={budget}
					value={budget}
					color="secondary"
					disabled={false}
					onChange={handleBudgetChange}
					sx={formStyling}
				/>
				<Button
					type="submit"
					color="secondary"
					onClick={(e) => handleSubmit(e)}
				>
					+
				</Button>
			</FormControl>
			{displayProgressBar()}
		</Box>
	);
}

export default BudgetInputBox;
