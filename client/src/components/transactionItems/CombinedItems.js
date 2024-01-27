import React, { useMemo } from 'react';
import { useAppContext } from '../../context/context';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import ExpenseCard from './expense-card/ExpenseCard';
import DepositCard from './deposit-card/DepositCard';
import NoDataCard from './noData-card/NoDataCard';
import { sortArrayByDate } from '../../utils/sortArray';
import AnimatedList from '../animated-list/AnimatedList';

// import classes from './layout/Movements.module.css';

const CombinedItems = ({ type }) => {
	const { transactions } = useFilteredTransactions(type);
	const { state } = useAppContext();

	let combinedTransactions = useMemo(() => {
		return transactions;
	}, [transactions]);

	if (
		(state.budget === null && state.isActive !== 0) ||
		combinedTransactions.length === 0
	) {
		return <NoDataCard type="transaction" />;
	}

	sortArrayByDate(combinedTransactions);

	return (
		<AnimatedList items={combinedTransactions}>
			{(transaction) =>
				transaction.amount < 0 ? (
					<ExpenseCard expense={transaction} key={transaction.id} />
				) : (
					<DepositCard deposit={transaction} key={transaction.id} />
				)
			}
		</AnimatedList>
	);
};

export default CombinedItems;
