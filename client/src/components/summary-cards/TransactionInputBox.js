import { useDarkMode } from '../../hooks/useDarkMode';
import { useTransactionContext } from '../../context/transactionContext';
import {
	Box,
	FormControl,
	InputLabel,
	Select,
	Stack,
	TextField,
} from '@mui/material';

import useSwitchInputLabel from '../../hooks/useSwitchInputLabels';
import { useModalContext } from '../../context/modalContext';

function TransactionInputBox() {
	const { setMessage } = useModalContext();
	const { switchInputLabel } = useSwitchInputLabel();

	const {
		expenseAmount,
		setExpenseAmount,
		expenseCategory,
		setExpenseCategory,
	} = useTransactionContext();

	const { isDarkMode } = useDarkMode();

	function handleReturn(e) {
		e.preventDefault();
		return;
	}

	function handleExpenseCategory(e) {
		setExpenseCategory(e.target.value);
		setMessage('');
	}

	function handleExpenseAmount(e) {
		setExpenseAmount(e.target.value);
	}

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

	return (
		<Stack
			direction={{ md: 'column', lg: 'row' }}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
				}}
			>
				<Box
					sx={{
						'& .MuiTextField-root': {
							m: 1,
							width: { xs: '20ch', lg: '10ch' },
						},
					}}
					noValidate
					autoComplete="off"
				>
					<form component="form" onSubmit={handleReturn}>
						<TextField
							onChange={handleExpenseAmount}
							id="outlined-select-amount"
							label="amount"
							type="number"
							value={expenseAmount}
							color="secondary"
							sx={formStyling}
						></TextField>
					</form>
				</Box>

				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '20ch' },
					}}
					noValidate
					autoComplete="off"
				>
					<FormControl
						sx={{
							...formStyling,
							m: 1,
							width: '20ch',
						}}
					>
						<InputLabel id="expense-category-label">Category</InputLabel>
						<Select
							labelId="expense-category-label"
							id="outlined-select-category"
							label="Category"
							value={expenseCategory}
							onChange={handleExpenseCategory}
							color="secondary"
							sx={formStyling}
						>
							{switchInputLabel()}
						</Select>
					</FormControl>
				</Box>
			</Box>
		</Stack>
	);
}

export default TransactionInputBox;
