import React from 'react';
import { Stack } from '@mui/material';
import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

const MovementsExpenses = () => {
	const { accountMovements, sort } = useAppContext();

	const movementsToDisplay = accountMovements[1].expenses;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	return (
		<Stack
			direction={{ s: 'column', sm: 'row' }}
			sx={{
				justifyContent: 'space-between',
				mb: 2,
				flexGrow: 1,
			}}
		>
			<ul>
				<Stack>
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
								<span className={classes.movements__type__withdrawal}>
									Expense
								</span>
								<span className={classes.movements__date}>{item[1]}</span>
								<span className={classes.movements__category}>{item[2]}</span>
								<span className={classes.movements__value}>
									€{item[0].toFixed(2)}
								</span>
							</Stack>
						</div>
					))}
				</Stack>
			</ul>
		</Stack>
	);
};

export default MovementsExpenses;
