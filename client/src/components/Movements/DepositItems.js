import React from 'react';
import { useAppContext } from '../../context/context';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Movements.module.css';

import DepositCard from './DepositCard';

const containerVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: 400,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { delay: 0.2 },
	},
};

const DepositItems = () => {
	const { state } = useAppContext();

	let moves;

	if (state.isActive === 0) {
		moves = state.deposits;
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
		<motion.ul className={classes.movements__row}>
			<AnimatePresence>
				{moves.map((deposit) => (
					<motion.li
						key={deposit.id}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={{
							y: 200,
							opacity: 0,
							scale: 0.9,
							transition: { delay: 0.2 },
						}}
					>
						<DepositCard deposit={deposit} />
					</motion.li>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default DepositItems;
