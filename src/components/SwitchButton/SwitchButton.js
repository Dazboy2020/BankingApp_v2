import React from 'react';
import classes from './SwitchButton.module.css';

const SwitchButton = ({ onSwitchCurrency }) => {
	return (
		<button className={classes.switch__btn} onClick={onSwitchCurrency}>
			Switch Currency &rarr; 🔃
		</button>
	);
};

export default SwitchButton;
