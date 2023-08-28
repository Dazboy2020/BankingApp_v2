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
import ResponsiveAppBar from '../Navbar/NewNav';

import { NavLink, useNavigate } from 'react-router-dom';

import classes from './SignIn.module.css';
import { useAppContext } from '../context/context';

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit">DazBoy</Link> {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

export default function SignIn() {
	const {
		pin,
		// setPin,
		user,
		// setUser,
		// loggedInAccount,
		logUserIn,
		error,
		// setError,
		dispatch,
	} = useAppContext();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		logUserIn();
		if (user) navigate('/application');
	};

	// function onBlurHandler() {
	// 	setError(false);

	// 	if (user.length > 0) setError(false);
	// }

	return (
		<>
			<ResponsiveAppBar />
			<Box className={classes.wrapper}>
				<ThemeProvider theme={defaultTheme}>
					<Container component="main" maxWidth="xs">
						<CssBaseline />
						<Box
							sx={{
								backgroundColor: 'white',
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
							<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
									onChange={(e) =>
										dispatch({
											type: 'field',
											fieldName: 'user',
											payload: e.currentTarget.value,
										})
									}
									// onBlur={onBlurHandler}
									color="secondary"
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
									onChange={(e) =>
										dispatch({
											type: 'field',
											fieldName: 'pin',
											payload: e.currentTarget.value,
										})
									}
									// onBlur={onBlurHandler}
									color="secondary"
								/>
								{error ? (
									<p style={{ color: 'red' }}>Something went wrong!</p>
								) : (
									<p style={{ color: 'white' }}>Something went wrong!</p>
								)}
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
									color="secondary"
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
										<NavLink to="/signup" variant="body2">
											{"Don't have an account? Sign Up"}
										</NavLink>
									</Grid>
								</Grid>
							</Box>
						</Box>
						<Copyright sx={{ mt: 8, mb: 4 }} />
					</Container>
				</ThemeProvider>
			</Box>
		</>
	);
}
