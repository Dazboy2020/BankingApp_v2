import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../variants';
import { exitAnimation } from '../variants';
import DepositCard from './DepositCard';
import NoDataCard from '../noData-card/NoDataCard';
import useFilteredTransactions from '../../../hooks/useFilteredTransactions';
import AnimatedList from '../../animated-list/AnimatedList';

const DepositItems = () => {
	const { transactions } = useFilteredTransactions('deposits');

	const memoizedDeposits = useMemo(() => {
		return transactions;
	}, [transactions]);

	return (
		<>
			{memoizedDeposits.length === 0 && (
				<motion.li
					style={{ listStyleType: 'none' }}
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
		</>
	);
};

export default DepositItems;
