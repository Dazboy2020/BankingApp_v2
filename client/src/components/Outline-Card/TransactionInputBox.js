import { Box, MenuItem, Stack, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useAppContext } from '../../context/context';
import { useDarkMode } from '../../Hooks/useDarkMode';

import { menuExpenseItems } from './menuExpenseItems';
import { menuDepositItems } from './menuDepositItems';
import { useTransactionContext } from '../../context/transactionContext';

function TransactionInputBox() {
	const { setMessage, state } = useAppContext();
	const {
		expenseType,
		setExpenseType,
		expenseAmount,
		setExpenseAmount,
		expenseCategory,
		setExpenseCategory,
		label,
		setLabel,
	} = useTransactionContext();

	const { isDarkMode } = useDarkMode();

	//! set expense type //
	useEffect(
		function () {
			if (state.isActive === 1) {
				setLabel('expense');
				setExpenseCategory('');
				setExpenseType('expense');
				setExpenseAmount('');
			}
			if (state.isActive === 2) {
				setLabel('deposit');
				setExpenseCategory('');
				setExpenseType('deposit');
				setExpenseAmount('');
			}
		},
		[
			expenseType,
			state.isActive,
			setExpenseType,
			setExpenseCategory,
			setExpenseAmount,
			setLabel,
		]
	);

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
		},
		'& .MuiInputBase-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiFormHelperText-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiOutlinedInput-root': {
			'& > fieldset': {
				borderColor: isDarkMode ? '#d6d3d1' : '#000',
				borderRadius: 1,
				color: isDarkMode ? '#d6d3d1' : '#000',
			},
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
					'& .MuiTextField-root': {
						m: 1,
						width: '20ch',
					},
				}}
				noValidate
				autoComplete="off"
			>
				<form component="form" onSubmit={handleReturn}>
					<TextField
						onChange={handleExpenseAmount}
						id="outlined-select-currency"
						type="number"
						label="amount"
						value={expenseAmount}
						helperText="Select amount"
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
				<TextField
					id="outlined-select-currency"
					select
					label="Select"
					value={expenseCategory}
					helperText="Category"
					color="secondary"
					onChange={handleExpenseCategory}
					sx={formStyling}
				>
					{label === 'expense'
						? menuExpenseItems.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}
									sx={{ color: isDarkMode ? '#d6d3d1' : '#000' }}
								>
									{option.label}
								</MenuItem>
						  ))
						: menuDepositItems.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}
									sx={{ color: isDarkMode ? '#d6d3d1' : '#000' }}
								>
									{option.label}
								</MenuItem>
						  ))}
				</TextField>
			</Box>
		</Stack>
	);
}

export default TransactionInputBox;
