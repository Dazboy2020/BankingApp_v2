import React from 'react';
import { motion } from 'framer-motion';
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
		<>
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
				{(expense) => <ExpenseCard expense={expense} />}
			</AnimatedList>
		</>
	);
};

export default ExpenseItems;
