import * as React from 'react';
import { useAppContext } from '../context/context';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import ResponsiveAppBar from '../components/navbar/NewNav';

import classes from './SignIn.module.css';
import LinearWithValueLabel from '../UI/AlertDialogue/Progress';

import useGetUserToken from '../hooks/useGetUserToken';
import GoogleLoginButton from '../components/buttons/GoogleLogin';

import { motion } from 'framer-motion';

import {
	containerVariants,
	exitAnimation,
} from './page-animations/login_register';

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
	const { isLoading } = useAppContext();

	const { getUserToken } = useGetUserToken();

	const [data, setData] = useState({
		email: '',
		password: '',
	});

	function onChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!data.email || !data.password) return;
		setData({
			email: '',
			password: '',
		});

		getUserToken(data);
	};

	const storagetoken = localStorage.getItem('authToken');

	return (
		<>
			<ResponsiveAppBar />
			{isLoading ? (
				<>
					<LinearWithValueLabel />
				</>
			) : (
				<Box className={classes.wrapper}>
					{!storagetoken && (
						<motion.div
							layout="true"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							exit={exitAnimation}
						>
							<ThemeProvider theme={defaultTheme}>
								<Container
									component="main"
									sx={{
										width: { xs: '100%', sm: '90%', md: '70%', lg: '40%' },
									}}
								>
									<CssBaseline />
									<Box
										sx={{
											backgroundColor: '#f1f5f9',
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
											sx={{ mt: 1 }}
										>
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
												value={data.password}
												onChange={onChange}
												color="secondary"
											/>

											<GoogleLoginButton />

											<Button
												startIcon={<Login size="medium" />}
												type="submit"
												fullWidth
												variant="contained"
												sx={{ mt: 3, mb: 2 }}
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
						</motion.div>
					)}
				</Box>
			)}
		</>
	);
}
