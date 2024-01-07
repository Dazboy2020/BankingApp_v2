import { useEffect } from 'react';
import { useTransactionContext } from '../context/transactionContext';
import { menuExpenseItems } from '../components/summary-cards/menuExpenseItems';
import { menuDepositItems } from '../components/summary-cards/menuDepositItems';
import { MenuItem } from '@mui/material';
import { useDarkMode } from './useDarkMode';

export default function useSwitchInputLabel(expenseType) {
	const {
		setLabel,
		label,
		setExpenseCategory,
		setExpenseType,
		setExpenseAmount,
	} = useTransactionContext();

	const { isDarkMode } = useDarkMode();

	useEffect(
		function () {
			if (expenseType === 'expense') {
				setLabel('expense');
				setExpenseCategory('');
				setExpenseType('expense');
				setExpenseAmount('');
			}
			if (expenseType === 'deposit') {
				setLabel('deposit');
				setExpenseCategory('');
				setExpenseType('deposit');
				setExpenseAmount('');
			}
		},
		[
			setLabel,
			setExpenseAmount,
			setExpenseCategory,
			setExpenseType,
			expenseType,
		]
	);

	function switchInputLabel() {
		if (label === 'expense') {
			return menuExpenseItems.map((option) => (
				<MenuItem
					key={option.value}
					value={option.value}
					sx={{ color: isDarkMode ? '#d6d3d1' : '#000' }}
				>
					{option.label}
				</MenuItem>
			));
		}

		if (label === 'deposit') {
			return menuDepositItems.map((option) => (
				<MenuItem
					key={option.value}
					value={option.value}
					sx={{ color: isDarkMode ? '#d6d3d1' : '#000' }}
				>
					{option.label}
				</MenuItem>
			));
		}
	}

	return { switchInputLabel };
}
