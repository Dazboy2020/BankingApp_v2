import * as React from 'react';
import { useAppContext } from '../../context/context';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useTransactionContext } from '../../context/transactionContext';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import CategoryMenuItems from './CategoryMenuItems';
import { motion } from 'framer-motion';

export default function CategoryMenu() {
	const { isDarkMode } = useDarkMode();
	const { dispatch, state } = useAppContext();
	const { expenseType, setExpenseType } = useTransactionContext();

	const [expenseCategory, setExpenseCategory] = useState('');

	const [anchorEl, setAnchorEl] = React.useState(null);

	//! Display filtered items //
	useEffect(
		function () {
			if (state.isActive === 0) {
				setExpenseType('All Transactions');

				dispatch({ type: 'user/filteredCombined', payload: expenseCategory });
			}

			if (state.isActive === 1) {
				dispatch({ type: 'user/filteredExpenses', payload: expenseCategory });
			}

			if (state.isActive === 2) {
				dispatch({ type: 'user/filteredDeposits', payload: expenseCategory });
			}

			if (state.isActive === 4) {
				setExpenseType('budget');
				dispatch({ type: 'user/filteredBudget', payload: expenseCategory });
			}
		},
		[expenseType, state.isActive, dispatch, expenseCategory, setExpenseType]
	);

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
				component={motion.button}
				whileTap={{ scale: 1.1 }}
				transition={{ type: 'spring', stiffness: 500 }}
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
				<CategoryMenuItems
					handleClose={handleClose}
					expenseType={expenseType}
				/>
			</Menu>
		</div>
	);
}
