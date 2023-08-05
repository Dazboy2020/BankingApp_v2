import React from 'react';
// import Movements from './Movements';
import classes from './MovementList.module.css';

const MovementList = ({ children }) => {
	return (
		<div className={classes.main_window}>
			{/* <Movements
				accountMovements={accountMovements}
				currency={currency}
				sort={sort}
			/> */}
			{children}
		</div>
	);
};

export default MovementList;
