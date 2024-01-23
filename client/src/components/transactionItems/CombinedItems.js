import React, { useMemo } from 'react';
import { useAppContext } from '../../context/context';
import { motion } from 'framer-motion';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import ExpenseCard from './expense-card/ExpenseCard';
import DepositCard from './deposit-card/DepositCard';
import NoDataCard from './noData-card/NoDataCard';
import classes from './Movements.module.css';
import { sortArrayByDate } from '../../utils/sortArray';
import AnimatedList from '../animated-list/AnimatedList';

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
		<motion.ul
			style={{ listStyleType: 'none' }}
			className={classes.movements__row}
		>
			<AnimatedList items={combinedTransactions}>
				{(transaction) =>
					transaction.amount < 0 ? (
						<ExpenseCard expense={transaction} key={transaction.id} />
					) : (
						<DepositCard deposit={transaction} key={transaction.id} />
					)
				}
			</AnimatedList>
		</motion.ul>
	);
};

export default CombinedItems;
