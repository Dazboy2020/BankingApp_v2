import React from 'react';
import { Stack } from '@mui/material';
import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

const Movements = () => {
	const { state } = useAppContext();

	const movementsToDisplay = state.deposits;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	return (
		<ul className={animate}>
			{moves.map((item) => (
				<div
					key={Math.floor(Math.random() * 10000) + 1}
					className={classes.movements}
				>
					<Stack className={classes.movements__row}>
						<span className={classes.movements__type__deposit}>Income</span>
						<span className={classes.movements__date}>{item[1]}</span>
						<span className={classes.movements__category}>{item[2]}</span>
						<span className={classes.movements__value}>
							€{item[0].toFixed(2)}
						</span>
					</Stack>
				</div>
			))}
		</ul>
	);
};

export default Movements;
