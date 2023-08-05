import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from '@mui/icons-material';

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				DazBoy
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

export default function SignIn({
	pin,
	user,
	setPin,
	setUser,
	loggedInAccount,
	setIsLoggedIn,
	setAccountMovements,
}) {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(loggedInAccount);

		if (!loggedInAccount || !pin) return;

		if (loggedInAccount && loggedInAccount[0].pin === +pin) {
			setAccountMovements(loggedInAccount);
			setIsLoggedIn((cur) => !cur);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container
				component="main"
				maxWidth="xs"
				// style={{ backgroundColor: 'whitesmoke' }}
			>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: 'solid 1px black',
						padding: '3rem',
						boxShadow:
							'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="username"
							name="username"
							autoComplete="username"
							autoFocus
							value={user}
							onChange={(e) => setUser(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="pin"
							label="pin"
							type="password"
							id="pin"
							autoComplete="current-pin"
							value={pin}
							onChange={(e) => setPin(e.target.value)}
						/>
						<FormControlLabel
							sx={{ mt: 5 }}
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							startIcon={<Login size="medium" />}
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 1, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}
