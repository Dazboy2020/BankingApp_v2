import React from 'react';
import { useAppContext } from '../../context/context';
import { motion } from 'framer-motion';
import classes from './Movements.module.css';

import DepositCard from './DepositCard';

const containerVariants = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	visible: {
		opacity: 1,
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

	// const animate =
	// 	state.addTransactionAnimate === true
	// 		? classes.movements__row__animate
	// 		: classes.movements__row;

	return (
		<motion.ul
			className={classes.movements__row}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{moves.map((deposit) => (
				<DepositCard deposit={deposit} key={deposit.id} />
			))}
		</motion.ul>
	);
};

export default DepositItems;
