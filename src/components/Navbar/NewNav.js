import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import { AccountBalanceOutlined, GitHub } from '@mui/icons-material';
import { Link, Stack } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import classes from './Navbar.module.css';
const now = new Date();
const options = {
	weekday: 'long',
	day: '2-digit',
	year: 'numeric',
};

const curDate = new Intl.DateTimeFormat('en-GB', options).format(now);

function ResponsiveAppBar({
	accountMovements,
	switchCurrency,
	setOpen,
	accounts,
	setUser,
	setPin,
	setClosePin,
	setCloseUser,
	user,
	setOpenModal,
	isLoggedin,
	setIsLoggedIn,
}) {
	const navigate = useNavigate();
	function handleClick() {
		if (!isLoggedin) {
			setOpen(true);
		}
	}

	function handleLogin() {
		navigate('/login');
	}

	function closeAccountHandler(e) {
		e.preventDefault();

		setOpenModal(true);
		const index = accounts.findIndex((acc) => acc.owner === user);
		accounts.splice(index, 1);
		setClosePin('');
		setCloseUser('');
		setPin('');
		setUser('');
	}

	useEffect(
		function () {
			console.log('NAVBAR', user);
		},
		[user]
	);

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: '#585054',
				mb: '1rem',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
					>
						<Button
							onClick={closeAccountHandler}
							size="xs"
							color="inherit"
							startIcon={<ErrorOutlineIcon color="white" sx={{ ml: 1 }} />}
						>
							Close
						</Button>
						<Button
							onClick={() => switchCurrency()}
							size="xs"
							color="inherit"
							startIcon={<CurrencyExchangeIcon color="white" sx={{ ml: 1 }} />}
						>
							Switch
						</Button>
						<Button
							size="xs"
							color="inherit"
							startIcon={<GitHub color="white" sx={{ ml: 1 }} />}
						>
							<Link
								sx={{ color: 'white' }}
								href="https://github.com/Dazboy2020"
							>
								About
							</Link>
						</Button>
						{/* <Button
							onClick={handleClick}
							color="inherit"
							startIcon={<ExitToAppIcon color="white" sx={{ ml: 1 }} />}
						>
							Logout
						</Button> */}
						{user ? (
							<Button
								onClick={handleClick}
								color="inherit"
								startIcon={<ExitToAppIcon color="white" sx={{ ml: 1 }} />}
							>
								Logout
							</Button>
						) : (
							// <NavLink className={classes.link} to="/login">
							// 	LOGIN
							// </NavLink>
							<Button
								onClick={handleLogin}
								color="inherit"
								startIcon={<ExitToAppIcon color="white" sx={{ ml: 1 }} />}
							>
								Login
							</Button>
						)}
					</Stack>
					<Stack
						direction={'row'}
						sx={{
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex',
								justifyContent: 'flex-end',
								flexGrow: 1,
							},
							fontFamily: 'monospace',
							fontWeight: 700,
							color: 'white',
						}}
					>
						<Typography variant="h6">{curDate}</Typography>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
