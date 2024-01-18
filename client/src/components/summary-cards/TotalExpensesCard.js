import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';

export default function TotalExpensesCard({ type }) {
	const { totalExpenses, totalBudgetExpenses } = useAppContext();

	function totalToDisplay(type) {
		if (type === 'budget') {
			return `€${Math.abs(totalBudgetExpenses.toFixed(2))}`;
		} else {
			return `€${Math.abs(totalExpenses.toFixed(2))}`;
		}
	}

	return (
		<CustomCard
			TransactionTypeCard="Total Expenses"
			transactionTotal={totalToDisplay(type)}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '40px', sm: '50px' } }}
				/>
			}
		/>
	);
}
