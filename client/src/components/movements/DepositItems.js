import React, { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Movements.module.css';
import { containerVariants } from './variants';
import { exitAnimation } from './variants';
import DepositCard from './DepositCard';
import NoDataCard from './NoDataCard';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';

const DepositItems = () => {
	const { transactions } = useFilteredTransactions('deposits');

	const memoizedDeposits = useMemo(() => {
		return transactions;
	}, [transactions]);

	return (
		<ul style={{ listStyleType: 'none' }} className={classes.movements__row}>
			{memoizedDeposits.length === 0 && (
				<motion.li
					// layout="true"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
				>
					<NoDataCard type="Deposit" />
				</motion.li>
			)}

			{memoizedDeposits.map((deposit) => (
				<AnimatePresence mode="wait">
					<motion.li
						layout="true"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={exitAnimation}
						key={deposit.id}
					>
						<DepositCard deposit={deposit} />
					</motion.li>
				</AnimatePresence>
			))}
		</ul>
	);
};

export default DepositItems;
