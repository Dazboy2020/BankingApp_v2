import React from 'react';
import classes from './OperationFX.module.css';

const OperationFx = ({ onAddFX, setAmountFX, currency, amountFX }) => {
	return (
		<div className={classes.operation__loan}>
			<p className={classes.fx__label}>
				{currency === 'euro' ? 'Exchange € for $' : 'Exchange $ for €'}
			</p>
			<form className={classes.form} onSubmit={onAddFX}>
				<input
					type="number"
					onChange={(e) => setAmountFX(e.target.value)}
					className={classes.form__input}
					value={amountFX}
				/>
				<button className={classes.form__btn__loan}>&rarr;</button>
				<label className={classes.form__label__loan}>Amount</label>
			</form>
		</div>
	);
};

export default OperationFx;
