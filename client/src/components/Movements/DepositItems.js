import React from 'react';
import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

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

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	return (
		<ul className={animate}>
			{moves.map((deposit) => (
				<DepositCard deposit={deposit} key={deposit.id} />
			))}
		</ul>
	);
};

export default DepositItems;
