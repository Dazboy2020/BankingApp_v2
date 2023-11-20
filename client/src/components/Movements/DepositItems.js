import React from 'react';
import { useAppContext } from '../../context/context';
import { motion } from 'framer-motion';
import classes from './Movements.module.css';

import DepositCard from './DepositCard';

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

	// const animate =
	// 	state.addTransactionAnimate === true
	// 		? classes.movements__row__animate
	// 		: classes.movements__row;

	return (
		<motion.ul
			className={classes.movements__row}
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.2 }}
		>
			{moves.map((deposit) => (
				<DepositCard deposit={deposit} key={deposit.id} />
			))}
		</motion.ul>
	);
};

export default DepositItems;
