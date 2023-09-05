import React from 'react';
import classes from './MainWrapper.module.css';

const MainWrapper = ({ children }) => {
	return <div className={classes.MainWrapper}>{children}</div>;
};

export default MainWrapper;
