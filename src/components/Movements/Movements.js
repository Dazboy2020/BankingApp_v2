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
							<div className={classes.movements__row}>
								<div className={classes.movements__type__deposit}>deposit</div>
								<div className={classes.movements__date}>{item[1]}</div>
								<div className={classes.movements__value}>
									{item[0].toFixed(2)}
									{currency === 'euro' ? '€' : '$'}
								</div>
							</div>
						)}

						{item[0] < 1 && (
							<div className={classes.movements__row}>
								<div className={classes.movements__type__withdrawal}>
									withdrawal
								</div>
								<div className={classes.movements__date}>{item[1]}</div>
								<div className={classes.movements__value}>
									{item[0].toFixed(2)}
									{currency === 'euro' ? '€' : '$'}
								</div>
							</div>
						)}
					</div>
				))}
			</ul>
		</Stack>
	);
};

export default Movements;
