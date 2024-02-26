import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';
import dayjs from 'dayjs';

export default function TotalExpensesCard() {
	const { totalExpenses, totalBudgetExpenses, state } = useAppContext();
	let currentMonthText = dayjs().format('MMMM');

	function totalToDisplay() {
		if (state.isActive === 4) {
			return `€${Math.abs(totalBudgetExpenses.toFixed(2))}`;
		} else {
			return `€${Math.abs(totalExpenses.toFixed(2))}`;
		}
	}

	function textToDisplay() {
		if (state.isActive === 4) {
			return `Total ${currentMonthText} Expenses`;
		} else {
			return 'Total Expenses';
		}
	}

	return (
		<CustomCard
			TransactionTypeCard={textToDisplay()}
			transactionTotal={totalToDisplay()}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '2rem', sm: '2.5rem' } }}
				/>
			}
		/>
	);
}
