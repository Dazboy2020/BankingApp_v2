import React from 'react';
// import Movements from './Movements';
import classes from './MovementList.module.css';

const MovementList = ({ children }) => {
	return <div className={classes.main_window}>{children}</div>;
};

export default MovementList;
