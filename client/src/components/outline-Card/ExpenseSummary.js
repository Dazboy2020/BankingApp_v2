import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';

export default function ExpenseSummary() {
	const { totalExpenses } = useAppContext();

	return (
		<CustomCard
			transactionType="Total Expenses"
			transactionTotal={`€${Math.abs(totalExpenses.toFixed(2))}`}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '50px', sm: '60px' } }}
				/>
			}
		/>
	);
}
