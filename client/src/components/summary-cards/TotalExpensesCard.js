import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';

export default function TotalExpensesCard({ type }) {
	const { totalExpenses, state } = useAppContext();

	const totalBudgetDeposits = state.budgetTransactions?.reduce(
		(accumulator, obj) => {
			return accumulator + (obj.amount < 0 ? obj.amount : 0);
		},
		0
	);

	function totalToDisplay(type) {
		if (type === 'budget') {
			return `€${Math.abs(totalBudgetDeposits.toFixed(2))}`;
		} else {
			return `€${Math.abs(totalExpenses.toFixed(2))}`;
		}
	}

	return (
		<CustomCard
			transactionType="Total Expenses"
			transactionTotal={totalToDisplay(type)}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '40px', sm: '50px' } }}
				/>
			}
		/>
	);
}
