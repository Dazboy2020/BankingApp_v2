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

const now = new Date();
const options = {
	weekday: 'long',
	day: '2-digit',
	year: 'numeric',
};

const curDate = new Intl.DateTimeFormat('en-GB', options).format(now);

function ResponsiveAppBar({
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
			position="sticky"
			sx={{
				backgroundColor: '#16425b',
				fontFamily: 'JetBrains Mono',
				height: { md: '80px' },
				justifyContent: 'center',
				m: 0,
				// mb: '1rem',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar disableGutters>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						sx={{
							alignItems: 'flex-start',
							justifyContent: 'flex-start',
						}}
					>
						{user ? (
							<>
								<Button
									sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
									onClick={closeAccountHandler}
									size="s"
									color="inherit"
									startIcon={<ErrorOutlineIcon color="white" sx={{ ml: 1 }} />}
								>
									Close
								</Button>
								<Button
									sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
									onClick={() => switchCurrency()}
									size="xs"
									color="inherit"
									startIcon={
										<CurrencyExchangeIcon color="white" sx={{ ml: 1 }} />
									}
								>
									Switch
								</Button>
								<Button
									sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
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

								<Button
									sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
									onClick={handleClick}
									color="inherit"
									startIcon={<ExitToAppIcon color="white" sx={{ ml: 1 }} />}
								>
									Logout
								</Button>
							</>
						) : (
							<Button
								sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
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