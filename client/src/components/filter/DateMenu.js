import * as React from 'react';
import { useAppContext } from '../../context/context';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTransactionContext } from '../../context/transactionContext';

export default function DateMenu() {
	const { isDarkMode } = useDarkMode();
	const { dispatch, state } = useAppContext();
	const { expenseType, setExpenseType } = useTransactionContext();

	const [expenseCategory, setExpenseCategory] = useState('');

	const [anchorEl, setAnchorEl] = React.useState(null);

	//! set expense type //

	useEffect(
		function () {
			if (state.isActive === 0) {
				setExpenseType('All Transactions');

				dispatch({ type: 'user/filterCombined', payload: expenseCategory });
			}

			if (state.isActive === 1) {
				setExpenseType('expense');
				dispatch({ type: 'user/filteredExpenses', payload: expenseCategory });
			}

			if (state.isActive === 2) {
				setExpenseType('deposit');
				dispatch({ type: 'user/filteredDeposits', payload: expenseCategory });
			}
		},
		[expenseType, state.isActive, dispatch, expenseCategory, setExpenseType]
	);

	const expenseLabelsInitial = state.expenses
		.filter((expense) => expense.category)
		.map((ex) => ex.category);

	expenseLabelsInitial.unshift('All Expenses');

	const depositLabelInitial = state.deposits
		.filter((deposit) => deposit.category)
		.map((dep) => dep.category);

	depositLabelInitial.unshift('All Deposits');

	const combinedLabelsInitial = state.combinedTransactions
		.filter((transaction) => transaction.category)
		.map((item) => item.category);

	combinedLabelsInitial.unshift('All transactions');

	const expenseLabels = [...new Set(expenseLabelsInitial)];
	const depositLabels = [...new Set(depositLabelInitial)];
	const combinedLabels = [...new Set(combinedLabelsInitial)];

	const open = Boolean(anchorEl);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = (e, value) => {
		setAnchorEl(null);
		setExpenseCategory(value);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Category
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{
					'& .MuiInputBase-root': {
						color: isDarkMode ? '#d6d3d1' : '#000',
					},
					'& .MuiMenuItem-root': {
						color: isDarkMode ? '#d6d3d1' : '#000',
					},
				}}
			>
				{expenseType === 'expense' &&
					expenseLabels.map((option) => (
						<MenuItem
							value={option}
							key={option}
							onClick={(e) => handleClose(e, option)}
						>
							{option}
						</MenuItem>
					))}

				{expenseType === 'deposit' &&
					depositLabels.map((option) => (
						<MenuItem
							value={option}
							key={option}
							onClick={(e) => handleClose(e, option)}
						>
							{option}
						</MenuItem>
					))}
				{expenseType === 'All Transactions' &&
					combinedLabels.map((option) => (
						<MenuItem
							value={option}
							key={option}
							onClick={(e) => handleClose(e, option)}
						>
							{option}
						</MenuItem>
					))}
			</Menu>
		</div>
	);
}
