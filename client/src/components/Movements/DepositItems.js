import React, { useEffect } from 'react';
import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

import DepositCard from './DepositCard';

const DepositItems = () => {
	const { dispatch, state } = useAppContext();

	//! Clear animation
	useEffect(() => {
		const intervalDuration = 2000;

		const intervalId = setInterval(() => {
			dispatch({ type: 'addTransactionAnimate', payload: false });
		}, intervalDuration);

		return () => {
			clearInterval(intervalId);
		};
	}, [dispatch]);

	const movementsToDisplay = state.isEditing
		? state.editingDeposit
		: state.deposits;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

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
