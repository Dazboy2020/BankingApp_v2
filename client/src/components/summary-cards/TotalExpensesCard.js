import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';

export default function TotalExpensesCard() {
	const { totalExpenses, totalBudgetExpenses, state } = useAppContext();

	function totalToDisplay() {
		if (state.isActive === 4) {
			return `€${Math.abs(totalBudgetExpenses.toFixed(2))}`;
		} else {
			return `€${Math.abs(totalExpenses.toFixed(2))}`;
		}
	}

	return (
		<CustomCard
			TransactionTypeCard="Total Expenses"
			transactionTotal={totalToDisplay()}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '40px', sm: '50px' } }}
				/>
			}
		/>
	);
}
