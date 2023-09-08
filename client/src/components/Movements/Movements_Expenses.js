import React from 'react';
import { Stack } from '@mui/material';
import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

const MovementsExpenses = () => {
	const { state } = useAppContext();

	const movementsToDisplay = state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	return (
		<ul>
			{moves.map((item) => (
				<div
					key={Math.floor(Math.random() * 10000) + 1}
					className={classes.movements}
				>
					<Stack
						direction={{ xs: 'column', s: 'row' }}
						sx={{ alignItems: 'flex-start' }}
						className={classes.movements__row}
					>
						<span className={classes.movements__type__expense}>Expense</span>
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

export default MovementsExpenses;
