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
		state,
	} = useAppContext();

	function totalToDisplay() {
		if (state.isActive === 4) {
			return `€${
				totalBudgetDeposits - Math.abs(totalBudgetExpenses).toFixed(2)
			}`;
		} else {
			return `€${totalIncome - Math.abs(totalExpenses).toFixed(2)}`;
		}
	}
	return (
		<CustomCard
			TransactionTypeCard="Available Funds"
			transactionTotal={totalToDisplay()}
			icon={
				<AccountBalanceIcon
					sx={{
						color: isDarkMode ? '#D1D5DB' : '#242a2e',
						fontSize: { xs: '2rem', sm: '2.5rem' },
					}}
				/>
			}
		/>
	);
}
