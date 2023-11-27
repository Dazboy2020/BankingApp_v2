import * as React from 'react';
import { useAppContext } from '../../context/context';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const buttonStyles = {
	// bgcolor: '#f70776',
	color: 'white',
	fontSize: '1.1rem',
	letterSpacing: '.1rem',
	paddingRight: '.8rem',
	mr: '10px',
	fontWeight: '500',
	mt: '.3rem',
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},

	pl: '1rem',
};

export default function DateMenu() {
	const { isDarkMode } = useDarkMode();

	const { dispatch, state } = useAppContext();
	const [expenseType, setExpenseType] = useState('expense');
	const [expenseCategory, setExpenseCategory] = useState('');

	const [anchorEl, setAnchorEl] = React.useState(null);

	//! set expense type //
	useEffect(
		function () {
			if (state.isActive === 1) {
				setExpenseType('expense');

				dispatch({ type: 'user/filteredExpenses', payload: expenseCategory });
			}
			if (state.isActive === 2) {
				setExpenseType('deposit');

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
				sx={buttonStyles}
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
				{expenseType === 'expense'
					? expenseLabels.map((option) => (
							<MenuItem
								value={option}
								key={option}
								onClick={(e) => handleClose(e, option)}
							>
								{option}
							</MenuItem>
					  ))
					: depositLabels.map((option) => (
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
