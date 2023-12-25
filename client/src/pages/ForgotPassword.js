/* eslint-disable no-unused-vars */
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../context/context';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from '@mui/icons-material';
import ResponsiveAppBar from '../components/navbar/NewNav';

import classes from './SignIn.module.css';
import LinearWithValueLabel from '../UI/AlertDialogue/Progress';

import axios from 'axios';
import { useModalContext } from '../context/modalContext';

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

export default function ForgotPassword() {
	const { state } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const navigate = useNavigate();

	const [data, setData] = useState({ email: '' });

	const [error, setError] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	const signInclass = isLoading
		? classes.loginBoxSigningIn
		: classes.loginBoxSignInSuccess;

	function onChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setMessage('Signing in..');
		setOpenToast(true, { message: message });

		console.log(data);

		try {
			const { data: userData } = await axios.post('/forgotpassword', data);

			if (userData.error) {
				console.log(userData.error);

				setMessage(userData.error);
				setOpenToast(true, { message: userData.error });
				setIsLoading(false);
				setData({ email: '' });
			} else {
				setIsLoading(false);
				setMessage('Request Sent');
				setOpenToast(true, { message: message });
				setData({ email: '' });
				navigate('/login');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{!isLoading && <ResponsiveAppBar />}
			{isLoading ? (
				<>
					<LinearWithValueLabel />
				</>
			) : (
				<Box className={classes.wrapper}>
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
									Forgot Password
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

									{state.error ? (
										<p style={{ color: 'red' }}>Something went wrong!</p>
									) : (
										<p style={{ color: 'white' }}>Something went wrong!</p>
									)}
									{/* <FormControlLabel
										sx={{ mt: 5 }}
										control={<Checkbox value="remember" color="primary" />}
										label="Remember me"
									/> */}
									<p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
									<Button
										startIcon={<Login size="medium" />}
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 12, mb: 2 }}
										color="secondary"
									>
										Request New Password
									</Button>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											height: '2rem',
										}}
									>
										<div sx={{ mb: 10 }}>
											<NavLink to="/SignUp" variant="body2">
												{"Don't have an account? Sign Up"}
											</NavLink>
										</div>
										<div>
											<NavLink to="/login" variant="body2">
												Login
											</NavLink>
										</div>
									</Box>
								</Box>
								<Copyright sx={{ mt: 4, mb: 0 }} />
							</Box>
						</Container>
					</ThemeProvider>
				</Box>
			)}
		</>
	);
}
