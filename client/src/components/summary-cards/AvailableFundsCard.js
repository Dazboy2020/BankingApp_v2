import * as React from 'react';

import { useAppContext } from '../../context/context';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CustomCard from './CustomCard';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function AvailbleFundsCard({ type }) {
	const { isDarkMode } = useDarkMode();
	const {
		totalExpenses,
		totalIncome,
		totalBudgetDeposits,
		totalBudgetExpenses,
	} = useAppContext();

	function totalToDisplay(type) {
		if (type === 'budget') {
			return `€${Math.abs(totalBudgetDeposits + totalBudgetExpenses).toFixed(
				2
			)}`;
		} else {
			return `€${Math.abs(totalIncome + totalExpenses).toFixed(2)}`;
		}
	}
	return (
		<CustomCard
			TransactionTypeCard="Available Funds"
			transactionTotal={totalToDisplay(type)}
			icon={
				<AccountBalanceIcon
					sx={{
						color: isDarkMode ? '#D1D5DB' : '#242a2e',
						fontSize: { xs: '40px', sm: '50px' },
					}}
				/>
			}
		/>
	);
}
