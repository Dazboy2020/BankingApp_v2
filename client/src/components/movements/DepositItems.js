import React from 'react';
import { useAppContext } from '../../context/context';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Movements.module.css';
import { containerVariants } from './variants';
import { exitAnimation } from './variants';
import DepositCard from './DepositCard';
import NoDataCard from './NoDataCard';

const DepositItems = () => {
	const { state } = useAppContext();

	let moves;

	if (state.isActive === 0) {
		moves = state.deposits;

		// moves = state.deposits;
	} else {
		if (state.isEditing) {
			moves = state.editingDeposit;
		} else {
			moves =
				state.filteredDeposits?.length > 0
					? state.filteredDeposits
					: state.deposits;
		}
	}

	if (!moves) {
		moves = [];
	}

	return (
		<ul style={{ listStyleType: 'none' }} className={classes.movements__row}>
			<AnimatePresence>
				{moves.length === 0 && (
					<motion.li
						layout="true"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={exitAnimation}
					>
						<NoDataCard type="Deposit" />
					</motion.li>
				)}

				{moves.map((deposit) => (
					<motion.li
						key={deposit.id}
						layout="true"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={exitAnimation}
					>
						<DepositCard deposit={deposit} />
					</motion.li>
				))}
			</AnimatePresence>
		</ul>
	);
};

export default DepositItems;
