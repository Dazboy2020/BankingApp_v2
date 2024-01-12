import { useTransactionContext } from '../context/transactionContext';
import { menuExpenseItems } from '../components/summary-cards/menuExpenseItems';
import { menuDepositItems } from '../components/summary-cards/menuDepositItems';
import { MenuItem } from '@mui/material';
import { useDarkMode } from './useDarkMode';

export default function useSwitchInputLabel(expenseType) {
	const { label } = useTransactionContext();

	const { isDarkMode } = useDarkMode();

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
