import React from 'react';
import classes from './CloseAccount.module.css';

const CloseAccount = ({
	onAddClose,
	setClosePin,
	setCloseUser,
	closePin,
	closeUser,
}) => {
	return (
		<div className={classes.operation}>
			<h2>Close account</h2>
			<form className={classes.form} onSubmit={onAddClose}>
				<input
					type="text"
					className={classes.form__input}
					onChange={(e) => setCloseUser(e.target.value)}
					value={closeUser}
				/>
				<input
					type="password"
					maxLength="4"
					className={classes.form__input}
					onChange={(e) => setClosePin(e.target.value)}
					value={closePin}
				/>
				<button className={classes.form__btn}>&rarr;</button>
				<label className={classes.form__label}>Confirm user</label>
				<label className={classes.form__label}>Confirm PIN</label>
			</form>
		</div>
	);
};

export default CloseAccount;
