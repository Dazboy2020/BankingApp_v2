import * as React from 'react';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomCard from './CustomCard';
import ProgressBarComponent from '../ProgressBar/ProgressBar';
import { useTransactionContext } from '../../context/transactionContext';

export default function ExpenseSummary() {
	const { totalExpenses } = useAppContext();
	const { budget } = useTransactionContext();

	function displayProgressBar() {
		if (+budget === null) return null;

		if (+budget !== null) return <ProgressBarComponent />;
	}

	return (
		<CustomCard
			transactionType="Total Expenses"
			transactionTotal={`€${Math.abs(totalExpenses.toFixed(2))}`}
			icon={
				<ShoppingCartIcon
					sx={{ color: 'red', fontSize: { xs: '40px', sm: '50px' } }}
				/>
			}
			bar={displayProgressBar()}
		/>
	);
}
