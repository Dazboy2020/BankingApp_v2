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

	return (
		<Stack
			direction={{ s: 'column', sm: 'row' }}
			sx={{
				justifyContent: 'space-between',
				alignItems: 'flex-start',
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
							{item[0] > 0 && (
								<Stack
									direction={{ xs: 'column', s: 'row' }}
									sx={{ alignItems: 'flex-start' }}
									className={classes.movements__row}
								>
									<span className={classes.movements__type__deposit}>
										Income
									</span>
									<span className={classes.movements__date}>{item[1]}</span>
									<span className={classes.movements__category}>{item[2]}</span>
									<span className={classes.movements__value}>
										€{item[0].toFixed(2)}
									</span>
								</Stack>
							)}
						</div>
					))}
				</Stack>
			</ul>
		</Stack>
	);
};

export default Movements;
