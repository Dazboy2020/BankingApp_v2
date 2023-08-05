import React from 'react';
import classes from './TransferMoney.module.css';

const TransferMoney = ({
	onAddTransfer,
	setTransferRecipient,
	setAmountTransfer,
	transferRecipient,
	amountTransfer,
}) => {
	return (
		<div className={classes.operation__transfer}>
			<h2>Transfer money</h2>
			<form className={classes.form} onSubmit={onAddTransfer}>
				<input
					type="text"
					className={classes.form__input}
					onChange={(e) => setTransferRecipient(e.target.value)}
					value={transferRecipient}
				/>
				<input
					type="number"
					className={classes.form__input}
					onChange={(e) => setAmountTransfer(e.target.value)}
					value={amountTransfer}
				/>
				<button className={classes.form__btn}>&rarr;</button>
				<label className={classes.form__label}>Transfer to</label>
				<label className={classes.form__label}>Amount</label>
			</form>
		</div>
	);
};

export default TransferMoney;
