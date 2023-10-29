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
import LinearWithValueLabel from '../UI/AlertDialogue/Progress';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';

import axios from 'axios';
// import Homepage from '../components/Homepage/Homepage';

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/Dazboy2020/">
				DazBoy
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

export default function SignIn() {
	// eslint-disable-next-line no-unused-vars
	const { state, dispatch, setOpenToast, message, setMessage } =
		useAppContext();

	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		password: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const BASE_URL = 'http://localhost:5000';

	const signInclass = isLoading
		? classes.loginBoxSigningIn
		: classes.loginBoxSignInSuccess;

	function onChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	async function getUserData() {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};

		try {
			const { data: userData } = await axios.get(
				`${BASE_URL}/userdata`,
				config
			);

			if (userData.error) {
				console.log(userData.error);

				setMessage(userData.error);
				setOpenToast(true, { message: userData.error });
				setIsLoading(false);
			} else {
				console.log('else block');
				dispatch({
					type: 'user/MongoLoggedIn',
					payload: {
						user: userData.user,
						token: userData.token,
					},
				});
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	//* useEffect to check whether authToken store in localStorage
	useEffect(() => {
		console.log('fetch private data');
		const fetchPrivateDate = async () => {
			const authToken = localStorage.getItem('authToken');

			if (!authToken) return;

			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('authToken')}`,
				},
			};

			try {
				const { data: userData } = await axios.get('/userdata', config);

				// if (!userData) return <SignIn />;
				if (!userData) return;
				dispatch({
					type: 'user/MongoLoggedIn',
					payload: {
						user: userData.user,
						token: userData.token,
					},
				});
			} catch (error) {
				localStorage.removeItem('authToken');
			}
		};

		fetchPrivateDate();
	}, [dispatch]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setMessage('Signing in..');
		setOpenToast(true, { message: message });

		try {
			const { data: userData } = await axios.post(`${BASE_URL}/login`, data);

			if (userData.error) {
				console.log(userData.error);

				setMessage(userData.error);
				setOpenToast(true, { message: userData.error });
				setIsLoading(false);
				setData({
					email: '',
					password: '',
				});

				return <SignIn />;
			} else {
				localStorage.setItem('authToken', userData.token);

				getUserData();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(
		function () {
			if (state.user) navigate('/overview');
			setIsLoading(false);
		},
		[navigate, state.user, setIsLoading]
	);

	const storagetoken = localStorage.getItem('authToken');

	return (
		<>
			{!isLoading && <ResponsiveAppBar />}
			{isLoading ? (
				<>
					<LinearWithValueLabel />
				</>
			) : (
				<Box className={classes.wrapper}>
					{!storagetoken && (
						<ThemeProvider theme={defaultTheme}>
							<Container className={signInclass} component="main" maxWidth="xs">
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
											id="email"
											label="email"
											name="email"
											autoComplete="email"
											autoFocus
											value={data.email}
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
												<Link href="/forgotpassword" variant="body2">
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
									<Copyright sx={{ mt: 4, mb: 0 }} />
								</Box>
							</Container>
						</ThemeProvider>
					)}
				</Box>
			)}
		</>
	);
}
