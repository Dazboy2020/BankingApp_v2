import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';

const now = new Date();
const options = {
	weekday: 'long',
	day: '2-digit',
	year: 'numeric',
};

const curDate = new Intl.DateTimeFormat('en-GB', options).format(now);

function ResponsiveAppBar() {
	const { state } = useAppContext();
	const [disableButton, setDisableButton] = React.useState(false);

	const navigate = useNavigate();

	function handleLogin() {
		navigate('/login');
	}

	React.useEffect(() => {
		// Get the current URL path
		const currentPath = window.location.pathname;

		// Check if the URL contains '/login'
		if (currentPath.includes('/login')) {
			setDisableButton(true);
		} else {
			setDisableButton(false);
		}
	}, []);

	return (
		<AppBar
			position="static"
			sx={{
				height: { md: '6rem' },
				justifyContent: 'center',
				alignContent: 'centre',
				m: 0,
				bgcolor: '#263238',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar disableGutters>
					<Stack direction={{ xs: 'column', md: 'row' }}>
						{!state.isLoggedIn && (
							<Button
								sx={{
									fontSize: { xs: '1rem', sm: '1.5rem' },
									'&:hover': {
										backgroundColor: '#680747',
										cursor: 'default',
									},
									bgcolor: '#f70776',
									color: 'white',
									paddingRight: '20px',
								}}
								size="medium"
								onClick={handleLogin}
								color="inherit"
								startIcon={
									<ExitToAppIcon size="large" color="white" sx={{ ml: 1 }} />
								}
								disabled={disableButton}
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
