import * as React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from '@mui/icons-material';
import ResponsiveAppBar from '../components/navbar/NavBar';

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

export default function ResetPassword() {
	const { setOpenToast, message, setMessage } = useModalContext();

	const navigate = useNavigate();
	let { resetToken } = useParams();

	const [data, setData] = useState({
		password: '',
		confirmPassword: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const signInclass = isLoading
		? classes.loginBoxSigningIn
		: classes.loginBoxSignInSuccess;

	function onChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (data.password !== data.confirmPassword) {
			setMessage('Passwords do not match!');
			setOpenToast(true, { message: message });

			setData({
				...data,
				password: '',
				confirmPassword: '',
			});
			return;
		}
		if (data.password.length < 8) {
			setMessage('Password must be at leat 8 characters');
			setOpenToast(true, { message: message });

			setData({
				...data,
				password: '',
				confirmPassword: '',
			});
			return;
		}

		try {
			const { data: userData } = await axios.put(
				`/resetpassword/${resetToken}`,
				data
			);

			if (userData.error) {
				console.log(userData.error);

				setOpenToast(true, { message: 'Something went wrong' });
				setIsLoading(false);
				setData({
					...data,
					password: '',
					confirmPassword: '',
				});
			} else {
				setMessage(userData.success);
				setOpenToast(true, { message: message });
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
									Reset Password
								</Typography>
								<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
									<TextField
										margin="normal"
										required
										fullWidth
										id="password"
										label="password"
										name="password"
										autoComplete="password"
										autoFocus
										value={data.password}
										onChange={onChange}
										color="secondary"
									/>
									<TextField
										margin="normal"
										required
										fullWidth
										name="confirmPassword"
										label="Confirm Password"
										type="password"
										id="confirmPassword"
										autoComplete="current-pin"
										value={data.confirmPassword}
										onChange={onChange}
										// onBlur={onBlurHandler}
										color="secondary"
									/>
									{/* {state.error ? (
										<p style={{ color: 'red' }}>Something went wrong!</p>
									) : (
										<p style={{ color: 'white' }}>Something went wrong!</p>
									)} */}

									{/* <p style={{ textAlign: 'center', color: 'red' }}>{error}</p> */}
									<Button
										startIcon={<Login size="medium" />}
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 1, mb: 2 }}
										color="secondary"
									>
										Create New Password
									</Button>
									<Grid container>
										<Grid item xs>
											<NavLink to="/login" variant="body2">
												Login
											</NavLink>
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
				</Box>
			)}
		</>
	);
}
