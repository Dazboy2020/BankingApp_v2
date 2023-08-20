import React from 'react';
import { Stack } from '@mui/material';
import classes from './Movements.module.css';

const Movements = ({ accountMovements, currency, sort }) => {
	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].deposits
			: accountMovements[1].expenses;

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
			// className={classes.main__container__window}
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
									<span className={classes.movements__value}>
										{item[0]}
										{currency === 'euro' ? '€' : '$'}
									</span>
								</Stack>
							)}

							{item[0] < 1 && (
								<Stack
									direction={{ xs: 'column', s: 'row' }}
									sx={{ alignItems: 'flex-start' }}
									className={classes.movements__row}
								>
									<span className={classes.movements__type__withdrawal}>
										Expense
									</span>
									<span className={classes.movements__date}>{item[1]}</span>
									<span className={classes.movements__value}>
										{item[0]}
										{currency === 'euro' ? '€' : '$'}
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
