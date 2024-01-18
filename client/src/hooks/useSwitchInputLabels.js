import { useTransactionContext } from '../context/transactionContext';
import { menuExpenseItems } from '../components/summary-cards/menuExpenseItems';
import { menuDepositItems } from '../components/summary-cards/menuDepositItems';
import { MenuItem } from '@mui/material';
import { useDarkMode } from './useDarkMode';
import { useEffect } from 'react';
import { useAppContext } from '../context/context';

export default function useSwitchInputLabel() {
	const {
		label,
		setExpenseType,
		setLabel,
		setExpenseAmount,
		setExpenseCategory,
	} = useTransactionContext();

	const { state } = useAppContext();

	const { isDarkMode } = useDarkMode();

	useEffect(() => {
		if (state.isActive === 1) {
			setExpenseType('expense');
			setLabel('expense');
			setExpenseCategory('');
			setExpenseAmount('');
		}
		if (state.isActive === 2) {
			setExpenseType('deposit');
			setLabel('deposit');
			setExpenseCategory('');
			setExpenseAmount('');
		}
	}, [
		state.isActive,
		setExpenseType,
		setLabel,
		setExpenseCategory,
		setExpenseAmount,
	]);

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
