import React from 'react';
import { motion } from 'framer-motion';
import classes from '../layout/Movements.module.css';
import ExpenseCard from './ExpenseCard';
import { containerVariants, exitAnimation } from '../variants';
import NoDataCard from '../noData-card/NoDataCard';
import useFilteredTransactions from '../../../hooks/useFilteredTransactions';
import { useMemo } from 'react';
import AnimatedList from '../../animated-list/AnimatedList';

const ExpenseItems = () => {
	const { transactions } = useFilteredTransactions('expenses');

	const memoizedExpenses = useMemo(() => {
		return transactions;
	}, [transactions]);

	return (
		<div className={classes.movements__row}>
			{memoizedExpenses.length === 0 && (
				<motion.li
					style={{ listStyleType: 'none' }}
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
				>
					<NoDataCard type="Expense" />
				</motion.li>
			)}

			<AnimatedList items={memoizedExpenses}>
				{useMemo(() => (expense) => <ExpenseCard expense={expense} />, [])}
			</AnimatedList>
		</div>
	);
};

export default ExpenseItems;
