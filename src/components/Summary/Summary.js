import React from 'react';
import classes from './Summary.module.css';

const Summary = ({ onSwitchCurrency, accountMovements, currency, onSort }) => {
	return (
		<div className={classes.summary}>
			<div>
				<p className={classes.summary__label}>In</p>
				<p className={classes.summary__value} style={{ color: 'green' }}>
					{currency === 'euro' ? '€' : '$'}
					{currency === 'euro'
						? accountMovements[0].movements
								.filter((mov) => mov[0] > 0)
								.reduce((acc, mov) => acc + mov[0], 0)
						: Math.abs(
								accountMovements[1].movementsUSD
									.filter((mov) => mov[0] > 0)
									.reduce((acc, mov) => acc + mov[0], 0)
									.toFixed(2)
						  )}
				</p>
			</div>

			<div>
				<p className={classes.summary__label}>Out</p>
				<p className={classes.summary__value} style={{ color: 'red' }}>
					{currency === 'euro' ? '€' : '$'}
					{currency === 'euro'
						? accountMovements[0].movements
								.filter((mov) => mov[0] < 0)
								.reduce((acc, mov) => acc + mov[0], 0)
								.toFixed(2)
						: Math.abs(
								accountMovements[1].movementsUSD
									.filter((mov) => mov[0] < 0)
									.reduce((acc, mov) => acc + mov[0], 0)
									.toFixed(2)
						  )}
				</p>
			</div>

			<div>
				<p className={classes.summary__label}>Interest</p>
				<p className={classes.summary__value} style={{ color: 'green' }}>
					{currency === 'euro' ? '€' : '$'}0000
				</p>
			</div>

			<div>
				<p className={classes.summary__label}>EUR/USD</p>
				<p className={classes.summary__value}>€1.00 = $1.06</p>
			</div>

			<div>
				<p className={classes.summary__label}>USD/EUR</p>
				<p className={classes.summary__value}>$1.00 = €0.94</p>
			</div>

			<button className={classes.btn__sort} onClick={onSort}>
				↓SORT
			</button>
		</div>
	);
};

export default Summary;
