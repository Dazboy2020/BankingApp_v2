import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import ExpenseCard from './ExpenseCard';
import DepositCard from './DepositCard';
import NoDataCard from './NoDataCard';
import classes from './Movements.module.css';
import { containerVariants, exitAnimation } from './variants';
import { sortArrayByDate } from '../../utils/sortArray';

const CombinedItems = ({ type }) => {
	const { transactions } = useFilteredTransactions(type);

	let combinedTransactions = useMemo(() => {
		return transactions;
	}, [transactions]);

	if (combinedTransactions.length === 0) {
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
