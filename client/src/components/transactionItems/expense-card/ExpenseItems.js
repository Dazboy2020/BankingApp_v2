import React from 'react';
import { motion } from 'framer-motion';
import classes from '../Movements.module.css';
import ExpenseCard from './ExpenseCard';
import { containerVariants, exitAnimation } from '../variants';
import NoDataCard from '../noData-card/NoDataCard';
import useFilteredTransactions from '../../../hooks/useFilteredTransactions';
import { useMemo } from 'react';
import AnimatedList from '../../animated-list/AnimatedList';

const ExpenseItems = () => {
	const { transactions } = useFilteredTransactions('expenses');
	const MemoizedExpenseCard = React.memo(ExpenseCard);

	const memoizedExpenses = useMemo(() => {
		return transactions;
	}, [transactions]);

	return (
		<motion.ul
			style={{ listStyleType: 'none' }}
			className={classes.movements__row}
		>
			{memoizedExpenses.length === 0 && (
				<motion.li
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
				>
					<NoDataCard type="Expense" />
				</motion.li>
			)}

			<AnimatedList items={memoizedExpenses}>
				{(expense) => <MemoizedExpenseCard expense={expense} />}
				{/* {(expense) => <ExpenseCard expense={expense} />} */}
			</AnimatedList>
		</motion.ul>
	);
};

export default ExpenseItems;
