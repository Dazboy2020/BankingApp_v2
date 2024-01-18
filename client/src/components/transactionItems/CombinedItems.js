import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import ExpenseCard from './ExpenseCard';
import DepositCard from './DepositCard';
import NoDataCard from './NoDataCard';
import classes from './Movements.module.css';
import { containerVariants, exitAnimation } from './variants';
import { sortArrayByDate } from '../../utils/sortArray';
import { useAppContext } from '../../context/context';

/**
 * CombinedItems component renders a list of transaction items.
 * It takes in a 'type' prop to determine which transactions to display.
 * Uses hooks to get filtered transactions and app context.
 * Sorts transactions by date, checks if there are transactions to show.
 * Conditionally renders ExpenseCard or DepositCard for each transaction.
 */
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
						{transaction.amount < 0 ? (
							<ExpenseCard expense={transaction} key={transaction.id} />
						) : (
							<DepositCard deposit={transaction} key={transaction.id} />
						)}
					</motion.li>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default CombinedItems;
