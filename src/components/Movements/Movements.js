import React from 'react';
import { Stack } from '@mui/material';

import classes from './Movements.module.css';

const Movements = ({ accountMovements, currency, sort }) => {
	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].movements
			: accountMovements[1].movementsUSD;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	return (
		<Stack
			direction={{ s: 'column', sm: 'row' }}
			sx={{
				// display: 'flex',
				// flexDirection: 'column',
				justifyContent: 'space-between',
				mb: 2,
				mt: 2,
				flexGrow: 1,
			}}
			// className={classes.main__container__window}
		>
			<ul>
				{moves.map((item) => (
					<div
						key={Math.floor(Math.random() * 10000) + 1}
						className={classes.movements}
					>
						{item[0] > 0 && (
							<Stack
								// direction={{ xs: 'column', s: 'row' }}
								sx={{ alignItems: 'flex-start' }}
								className={classes.movements__row}
							>
								<span className={classes.movements__type__deposit}>
									deposit
								</span>
								<span className={classes.movements__date}>{item[1]}</span>
								<span className={classes.movements__value}>
									{item[0].toFixed(2)}
									{currency === 'euro' ? '€' : '$'}
								</span>
							</Stack>
						)}

						{item[0] < 1 && (
							<Stack
								sx={{ alignItems: 'flex-start' }}
								className={classes.movements__row}
							>
								<span className={classes.movements__type__withdrawal}>
									withdrawal
								</span>
								<span className={classes.movements__date}>{item[1]}</span>
								<span className={classes.movements__value}>
									{item[0].toFixed(2)}
									{currency === 'euro' ? '€' : '$'}
								</span>
							</Stack>
						)}
					</div>
				))}
			</ul>
		</Stack>
	);
};

export default Movements;
