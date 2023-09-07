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
import ResponsiveAppBar from '../components/Navbar/NewNav';

import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import classes from './SignIn.module.css';
import { useAppContext } from '../context/context';

import axios from 'axios';

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
	const { state, dispatch, useEffect } = useAppContext();
	// const navigate = useNavigate();
	const [mongoData, setMongoData] = useState('');

	// const [firstName, setFirsName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [pin, setPin] = useState('');
	// const [confirmPin, setConfirmPin] = useState(false);

	const [data, setData] = useState({
		firstName: '',
		// lastName: '',
		// email: '',
		password: '',
		// confirmPin: '',
	});

	function onChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	// const navigate = useNavigate();

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	console.log('click');
	// 	const { firstName, password } = data;

	// 	try {
	// 		const { data } = await axios.post('/login', {
	// 			firstName,
	// 			password,
	// 		});

	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}

	// 	if (data.error) {
	// 		console.log(data.error);
	// 	}
	// 	// dispatch({ type: 'user/LoggedIn', payload: (state.user, state.pin) });

	// 	// if (state.user) navigate('/overview');
	// };
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('click');

		try {
			const { data: userData } = await axios.post('/login', data);

			console.log(userData);

			// Now you have access to the user data
			const { expenses, deposits, _id, firstName, lastName, email } =
				userData.user;

			// You can use this user data as needed
			console.log('User ID:', _id);
			console.log('First Name:', firstName);
			console.log('Last Name:', lastName);
			console.log('Email:', email);
			console.log('Expenses:', expenses);
			console.log('Deposits:', deposits);
		} catch (error) {
			console.log(error);
		}

		// If you need to access data.error, do it after the try-catch block
		if (data.error) {
			console.log(data.error);
		}
		// dispatch({ type: 'user/LoggedIn', payload: (state.user, state.pin) });

		// if (state.user) navigate('/overview');
	};

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
									id="firstName"
									label="username"
									name="firstName"
									autoComplete="username"
									autoFocus
									value={data.firstName}
									// onChange={(e) =>
									// 	dispatch({
									// 		type: 'field',
									// 		fieldName: 'user',
									// 		payload: e.currentTarget.value,
									// 	})
									// }
									// onBlur={onBlurHandler}

									onChange={onChange}
									color="secondary"
								/>
								<TextField
									margin="normal"
									required
									fullWidth
									name="password"
									label="password"
									type="password"
									id="password"
									autoComplete="current-pin"
									value={data.password}
									onChange={onChange}
									// onBlur={onBlurHandler}
									color="secondary"
								/>
								{state.error ? (
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
