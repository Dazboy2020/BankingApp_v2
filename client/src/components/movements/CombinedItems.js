import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import ExpenseCard from './ExpenseCard';
import DepositCard from './DepositCard';
import NoDataCard from './NoDataCard';
import classes from './Movements.module.css';
import { containerVariants, exitAnimation } from './variants';
import { sortArrayByDate } from '../../utils/sortArray';

const CombinedItems = () => {
	const { transactions: expenseTransactions } =
		useFilteredTransactions('expenses');
	const { transactions: depositTransactions } =
		useFilteredTransactions('deposits');

	let combinedTransactions = useMemo(() => {
		let expenses = expenseTransactions.map((transaction) => ({
			...transaction,
			type: 'Expense',
		}));
		let deposits = depositTransactions.map((transaction) => ({
			...transaction,
			type: 'Deposit',
		}));

		return [...expenses, ...deposits];
	}, [expenseTransactions, depositTransactions]);

	if (combinedTransactions.length === 0) {
		return <NoDataCard type="Transaction" />;
	}

	sortArrayByDate(combinedTransactions);

	return (
		<motion.ul
			style={{ listStyleType: 'none' }}
			className={classes.movements__row}
		>
			<AnimatePresence>
				{combinedTransactions.map((transaction, index) => (
					<motion.li
						layout
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={exitAnimation}
						key={transaction.id}
						custom={index}
					>
						{transaction.type === 'Expense' ? (
							<ExpenseCard expense={transaction} />
						) : (
							<DepositCard deposit={transaction} />
						)}
					</motion.li>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default CombinedItems;
