import { AnimatePresence, motion } from 'framer-motion';
import classes from './Movements.module.css';
import ExpenseCard from './ExpenseCard';
import { containerVariants, exitAnimation } from './variants';
import NoDataCard from './NoDataCard';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import { useMemo } from 'react';

const ExpenseItems = () => {
	const { transactions } = useFilteredTransactions('expenses');

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
					<NoDataCard type="Expenses" />
				</motion.li>
			)}

			<AnimatePresence>
				{memoizedExpenses.map((expense) => (
					<motion.li
						layout="true"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={exitAnimation}
						key={expense.id}
					>
						<ExpenseCard expense={expense} />
					</motion.li>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default ExpenseItems;
