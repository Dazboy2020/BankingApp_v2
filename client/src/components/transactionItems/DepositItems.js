import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import classes from './Movements.module.css';
import { containerVariants } from './variants';
import { exitAnimation } from './variants';
import DepositCard from './DepositCard';
import NoDataCard from './NoDataCard';
import useFilteredTransactions from '../../hooks/useFilteredTransactions';
import AnimatedList from '../animated-list/AnimatedList';

const DepositItems = () => {
	const { transactions } = useFilteredTransactions('deposits');

	const memoizedDeposits = useMemo(() => {
		return transactions;
	}, [transactions]);

	return (
		<motion.ul
			style={{ listStyleType: 'none' }}
			className={classes.movements__row}
		>
			{memoizedDeposits.length === 0 && (
				<motion.li
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
				>
					<NoDataCard type="Deposit" />
				</motion.li>
			)}

			<AnimatedList items={memoizedDeposits}>
				{(deposit) => <DepositCard deposit={deposit} />}
			</AnimatedList>
		</motion.ul>
	);
};

export default DepositItems;
