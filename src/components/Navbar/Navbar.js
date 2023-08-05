import React from 'react';
import classes from './Navbar.module.css';

const Navbar = ({ accountMovements, setIsLoggedIn, setUser, setPin }) => {
	const now = new Date();
	const options = {
		weekday: 'long',
		day: '2-digit',
		year: 'numeric',
	};

	const curDate = new Intl.DateTimeFormat('en-GB', options).format(now);

	function handleClick() {
		setUser('');
		setPin('');
		setIsLoggedIn((cur) => !cur);
	}

	return (
		<nav className={classes.nav}>
			<p>Welcome, {accountMovements[0].owner.toUpperCase()}</p>
			{curDate}
			<button className={classes.logOut__btn} onClick={handleClick}>
				LOG OUT
			</button>
		</nav>
	);
};

export default Navbar;
