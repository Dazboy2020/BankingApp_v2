import { Box, MenuItem, TextField } from '@mui/material';
import { useAppContext } from '../../context/context';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

function FilterInputBox() {
	const { dispatch, state } = useAppContext();
	const [expenseType, setExpenseType] = useState('expense');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [label, setLabel] = useState('');

	const { isDarkMode } = useDarkMode();

	//! set expense type //
	useEffect(
		function () {
			if (state.isActive === 1) {
				setExpenseType('expense');
				setLabel('expense');

				dispatch({ type: 'user/filteredExpenses', payload: expenseCategory });
			}
			if (state.isActive === 2) {
				setExpenseType('deposit');
				setLabel('deposit');

				dispatch({ type: 'user/filteredDeposits', payload: expenseCategory });
			}
		},
		[expenseType, state.isActive, dispatch, expenseCategory]
	);

	const expenseLabelsInitial = state.expenses
		.filter((expense) => expense.category)
		.map((ex) => ex.category);

	expenseLabelsInitial.unshift('All Expenses');

	const depositLabelInitial = state.deposits
		.filter((deposit) => deposit.category)
		.map((dep) => dep.category);

	depositLabelInitial.unshift('All Deposits');

	const expenseLabels = [...new Set(expenseLabelsInitial)];
	const depositLabels = [...new Set(depositLabelInitial)];

	function handleExpenseCategory(e) {
		setExpenseCategory(e.target.value);
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
				// backgroundColor: isDarkMode ? '#171717' : '#f0ebd8',
			},
		},

		color: isDarkMode ? '#d6d3d1' : '#000',
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': {
					m: 1,
					width: { xs: '20ch', s: '30ch', md: '30ch' },
				},
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
					? expenseLabels.map((option) => (
							<MenuItem
								key={option}
								value={option}
								sx={{ color: isDarkMode ? '#d6d3d1' : '#000' }}
							>
								{option}
							</MenuItem>
					  ))
					: depositLabels.map((option) => (
							<MenuItem
								sx={{ color: isDarkMode ? '#d6d3d1' : '#000' }}
								key={Math.random().toLocaleString()}
								value={option}
							>
								{option}
							</MenuItem>
					  ))}
			</TextField>
		</Box>
	);
}

export default FilterInputBox;
