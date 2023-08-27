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
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';

const now = new Date();
const options = {
	weekday: 'long',
	day: '2-digit',
	year: 'numeric',
};

const curDate = new Intl.DateTimeFormat('en-GB', options).format(now);

function ResponsiveAppBar({
	// switchCurrency,
	setOpen,
	accounts,
	setUser,
	setPin,
	setClosePin,
	setCloseUser,
	user,
	setOpenModal,
	isLoggedin,
}) {
	const { switchCurrency } = useAppContext();
	const navigate = useNavigate();
	function handleClick() {
		if (!isLoggedin) {
			setOpen(true);
		}
	}

	function handleLogin() {
		navigate('/login');
	}

	function closeAccountHandler() {
		setOpenModal(true);
		const index = accounts.findIndex((acc) => acc.owner === user);
		accounts.splice(index, 1);
		setClosePin('');
		setCloseUser('');
		setPin('');
		setUser('');
	}

	return (
		<AppBar
			position="static"
			sx={{
				height: { md: '6rem' },
				justifyContent: 'center',
				alignContent: 'centre',
				m: 0,
				bgcolor: '#263238',

				// mb: '1rem',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar disableGutters>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						// sx={{
						// 	display: 'flex',
						// 	alignItems: 'flex-start',
						// 	justifyContent: 'flex-start',
						// 	alignContent: 'center',
						// }}
					>
						{user ? (
							<>
								<Button
									size="medium"
									sx={{
										fontSize: { xs: '1rem', sm: '1.5rem' },
										fontFamily: 'Nunito Sans',
									}}
									onClick={closeAccountHandler}
									color="inherit"
									startIcon={
										<ErrorOutlineIcon
											color="white"
											size="large"
											sx={{ ml: 1 }}
										/>
									}
								>
									Close
								</Button>
								<Button
									sx={{
										fontSize: { xs: '1rem', sm: '1.5rem' },
										fontFamily: 'Nunito Sans',
									}}
									onClick={() => switchCurrency()}
									size="medium"
									color="inherit"
									startIcon={
										<CurrencyExchangeIcon
											size="large"
											color="white"
											sx={{ ml: 1 }}
										/>
									}
								>
									Switch
								</Button>
								<Button
									sx={{
										fontSize: { xs: '1rem', sm: '1.5rem' },
										fontFamily: 'Nunito Sans',
										display: { xs: 'none', md: 'flex' },
									}}
									size="medium"
									color="inherit"
									startIcon={
										<GitHub color="white" size="large" sx={{ ml: 1 }} />
									}
								>
									<Link
										sx={{ color: 'white', textDecoration: 'none' }}
										href="https://github.com/Dazboy2020"
									>
										About
									</Link>
								</Button>

								<Button
									sx={{
										fontSize: { xs: '1rem', sm: '1.5rem' },
										fontFamily: 'Nunito Sans',
									}}
									size="medium"
									onClick={handleClick}
									color="inherit"
									startIcon={
										<ExitToAppIcon size="large" color="white" sx={{ ml: 1 }} />
									}
								>
									Logout
								</Button>
							</>
						) : (
							<Button
								// variant="contained"
								sx={{
									fontSize: { xs: '1rem', sm: '1.5rem' },
									fontFamily: 'Nunito Sans',
									'&:hover': {
										backgroundColor: '#680747',
										cursor: 'default',
									},
									bgcolor: '#f70776',
									color: 'white',
									// mt: 2,
								}}
								size="medium"
								onClick={handleLogin}
								color="inherit"
								startIcon={
									<ExitToAppIcon size="large" color="white" sx={{ ml: 1 }} />
								}
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
							fontFamily: 'Nunito Sans',

							fontWeight: 700,
							color: 'white',
						}}
					>
						<Typography variant="h5">{curDate}</Typography>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
