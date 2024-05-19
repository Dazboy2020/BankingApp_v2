import * as React from 'react';

import { useDarkMode } from '../../hooks/useDarkMode';
import { useAppContext } from '../../context/context';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CustomCard from './CustomCard';
import dayjs from 'dayjs';
import { formatToTwoDecimalPlaces } from '../../utils/formatTwoDecimalPlaces';

export default function AvailbleFundsCard({ type }) {
	const { isDarkMode } = useDarkMode();
	const {
		totalExpenses,
		totalIncome,
		totalBudgetDeposits,
		totalBudgetExpenses,
		state,
	} = useAppContext();

	const totalToDisplay = React.useMemo(() => {
		// if (state.isActive === 4) {
		// 	return `€${
		// 		totalBudgetDeposits - Math.abs(totalBudgetExpenses).toFixed(2)
		// 	}`;
		// } else {
		// 	return `€${totalIncome - Math.abs(totalExpenses).toFixed(2)}`;
		// }

		if (state.isActive === 4) {
			const result = totalBudgetDeposits - Math.abs(totalBudgetExpenses);
			return `€${formatToTwoDecimalPlaces(result)}`;
		} else {
			const result = totalIncome - Math.abs(totalExpenses);
			return `€${formatToTwoDecimalPlaces(result)}`;
		}
	}, [
		state.isActive,
		totalExpenses,
		totalIncome,
		totalBudgetExpenses,
		totalBudgetDeposits,
	]);

	let currentMonthText = dayjs().format('MMMM');

	const transactionTypeText = React.useMemo(() => {
		if (state.isActive === 4) {
			return `${currentMonthText
				.charAt(0)
				.toUpperCase()}${currentMonthText.slice(1)}'s Available Funds`;
		} else {
			return `Available Funds`;
		}
	}, [state.isActive, currentMonthText]);

	return (
		<CustomCard
			TransactionTypeCard={transactionTypeText}
			transactionTotal={totalToDisplay}
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
