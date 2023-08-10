import React from 'react';
import { Grid, Stack } from '@mui/material';
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
		// <Grid container sx={{ flexGrow: 1 }}>
		<Stack>
			{moves.map((item) => (
				<Grid
					container
					key={Math.floor(Math.random() * 10000) + 1}
					className={classes.movements}
				>
					{item[0] > 0 && (
						// <div className={classes.movements__row}>
						<>
							<Grid
								item
								md={3}
								sm={4}
								className={classes.movements__type__deposit}
							>
								deposit
							</Grid>
							<Grid item md={9} sm={4} className={classes.movements__date}>
								{item[1]}
							</Grid>
							<Grid item md={9} sm={4} className={classes.movements__value}>
								{item[0].toFixed(2)}
								{currency === 'euro' ? '€' : '$'}
							</Grid>
						</>
						// </div>
					)}

					{item[0] < 1 && (
						// <div className={classes.movements__row}>
						<>
							<Grid
								item
								md={3}
								sm={4}
								className={classes.movements__type__withdrawal}
							>
								withdrawal
							</Grid>
							<Grid item md={9} sm={4} className={classes.movements__date}>
								{item[1]}
							</Grid>
							<Grid item md={9} sm={4} className={classes.movements__value}>
								{item[0].toFixed(2)}
								{currency === 'euro' ? '€' : '$'}
							</Grid>
						</>
						// </div>
					)}
				</Grid>
			))}
		</Stack>
		// </Grid>
	);
};

export default Movements;
