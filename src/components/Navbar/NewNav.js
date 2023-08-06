import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CachedIcon from '@mui/icons-material/Cached';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { AccountBalanceOutlined } from '@mui/icons-material';

const now = new Date();
const options = {
	weekday: 'long',
	day: '2-digit',
	year: 'numeric',
};

const curDate = new Intl.DateTimeFormat('en-GB', options).format(now);

function ResponsiveAppBar({ accountMovements, switchCurrency }) {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: '#585054',
			}}
		>
			<Container maxWidth="xl">
				<Toolbar>
					<AccountBalanceOutlined
						sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
					/>
					<Typography variant="h6" noWrap>
						Welcome, {accountMovements[0].owner.toUpperCase()}
					</Typography>
					<Box>
						<Button
							size="xs"
							color="inherit"
							startIcon={<CachedIcon color="white" sx={{ ml: 3 }} />}
						>
							Exchange
						</Button>
						<Button
							size="xs"
							color="inherit"
							startIcon={<SyncAltIcon color="white" sx={{ ml: 1 }} />}
						>
							Transfer
						</Button>
						<Button
							size="xs"
							color="inherit"
							startIcon={<ErrorOutlineIcon color="white" sx={{ ml: 1 }} />}
						>
							Close
						</Button>
						<Button
							color="inherit"
							startIcon={<ExitToAppIcon color="white" sx={{ ml: 1 }} />}
						>
							LogOut
						</Button>
					</Box>
					<Box
						sx={{
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex',
								flexGrow: 1,
								alignContent: 'flex-end',
								justifyContent: 'flex-end',
							},
							fontFamily: 'monospace',
							fontWeight: 700,
							color: 'white',
						}}
					>
						<Typography variant="h6">{curDate}</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
