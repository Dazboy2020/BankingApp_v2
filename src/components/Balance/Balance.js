import React from 'react';
import classes from './Balance.module.css';

const Balance = ({ accountMovements }) => {
	const balanceEUR = accountMovements[0].movements.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const balanceUSD = accountMovements[1]?.movementsUSD.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	return (
		<div className={classes.balance}>
			<p className={classes.balance__label}>Current Balance</p>

			<div className={classes.balance__value}>
				<p className={classes.balance__value__USD}>
					$ {balanceUSD?.toFixed(2)}
				</p>
				<p className={classes.balance__value__EUR}>€ {balanceEUR.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default Balance;
