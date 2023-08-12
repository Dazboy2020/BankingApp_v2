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
}) {
	function handleLogOut() {
		setOpen(true);
	}

	function closeAccountHandler(e) {
		e.preventDefault();
		console.log('CLICK');

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
				backgroundColor: '#585054',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar>
					{/* <AccountBalanceOutlined
						sx={{
							display: { xs: 'none', s: 'flex' },
							mr: 1,
						}}
					/>
					<Typography variant="h6" noWrap>
						Welcome, {accountMovements[0].owner.toUpperCase()}
					</Typography> */}
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
						<Button
							onClick={handleLogOut}
							color="inherit"
							startIcon={<ExitToAppIcon color="white" sx={{ ml: 1 }} />}
						>
							LogOut
						</Button>
					</Stack>
					<Stack
						direction={'row'}
						sx={{
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex',
								justifyContent: 'flex-end',
								flexGrow: '1',

								// flexGrow: 1,
								// alignContent: 'flex-end',
								// justifyContent: 'flex-end',
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
