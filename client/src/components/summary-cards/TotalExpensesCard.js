import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';
import dayjs from 'dayjs';

export default function TotalExpensesCard() {
	const { totalExpenses, totalBudgetExpenses, state } = useAppContext();
	let currentMonthText = dayjs().format('MMMM');

	const totalToDisplay = React.useMemo(() => {
		if (state.isActive === 4) {
			return `€${Math.abs(totalBudgetExpenses.toFixed(2))}`;
		} else {
			return `€${Math.abs(totalExpenses.toFixed(2))}`;
		}
	}, [totalExpenses, state.isActive, totalBudgetExpenses]);

	const transactionTypeText = React.useMemo(() => {
		if (state.isActive === 4) {
			return `${currentMonthText
				.charAt(0)
				.toUpperCase()}${currentMonthText.slice(1)}'s Total Expenses`;
		} else {
			return `Total Expenses`;
		}
	}, [state.isActive, currentMonthText]);

	return (
		<CustomCard
			TransactionTypeCard={transactionTypeText}
			transactionTotal={totalToDisplay}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '2rem', sm: '2.5rem' } }}
				/>
			}
		/>
	);
}
