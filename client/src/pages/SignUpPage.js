import * as React from 'react';
import { useAppContext } from '../context/context';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
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
import ResponsiveAppBar from '../components/navbar/NavBar';

import {
	containerVariants,
	exitAnimation,
} from './page-animations/login_register';

import UnprotectedPageLayout from './layout/UnprotectedPageLayout';
import GoogleLoginButton from '../components/buttons/GoogleLogin';
import signup from '../assets/signup.png';
import SpinnerFullPage from '../components/spinner/SpinnerFullPage';
import useSignUpNewUser from '../hooks/useSignUpNewUser';
import { heroBackground } from '../components/homepage/homepage-utils';
import useAutoLogin from '../hooks/useAutoLogin';

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
				Dazboy
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

export default function SignUp() {
	const [successfullSignUp, setSuccessfullSignUp] = useState(false);
	const { state } = useAppContext();
	const navigate = useNavigate();
	const { signUpNewUser } = useSignUpNewUser();

	useAutoLogin();

	React.useEffect(() => {
		if (successfullSignUp) {
			navigate('/login');
		}
	}, [navigate, successfullSignUp]);

	const [data, setData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { username, email, password, confirmPassword } = data;

		const userdata = await signUpNewUser(
			username,
			email,
			password,
			confirmPassword
		);

		if (userdata) {
			setSuccessfullSignUp(true);
		} else {
			setData({
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		}
	};

	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	return state.isLoading ? (
		<SpinnerFullPage />
	) : (
		<UnprotectedPageLayout
			appBar={<ResponsiveAppBar />}
			backgroundImage={heroBackground}
		>
			{!state.token && (
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
								pt: 10,
							}}
						>
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
									Sign up
								</Typography>
								<Box
									component="form"
									noValidate
									onSubmit={handleSubmit}
									sx={{ mt: 3 }}
									onChange={handleChange}
								>
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<TextField
												autoComplete="given-name"
												name="username"
												required
												fullWidth
												id="username"
												label="username"
												autoFocus
												color="secondary"
											/>
										</Grid>

										<Grid item xs={12}>
											<TextField
												required
												fullWidth
												id="email"
												label="Email Address"
												name="email"
												autoComplete="email"
												color="secondary"
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												required
												fullWidth
												name="password"
												label="Password"
												type="password"
												id="password"
												autoComplete="new-password"
												color="secondary"
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												required
												fullWidth
												name="confirmPassword"
												label="Confirm Password"
												type="password"
												id="confirmPassword"
												// autoComplete="new-password"
												color="secondary"
											/>
										</Grid>
									</Grid>

									<Box
										component="span"
										sx={{
											display: 'flex',
											justifyContent: 'center',
											mt: 5,
										}}
									>
										<GoogleLoginButton
											height="2.5rem"
											width="75%"
											padding={0}
											image={signup}
										/>
									</Box>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2 }}
										color="secondary"
									>
										Sign Up
									</Button>
									<Grid container justifyContent="flex-end">
										<Grid item>
											<NavLink to="/login" variant="body2">
												Already have an account? Sign in
											</NavLink>
										</Grid>
									</Grid>
								</Box>

								<Copyright sx={{ mt: 5 }} />
							</Box>
						</Container>
					</ThemeProvider>
				</motion.div>
			)}
		</UnprotectedPageLayout>
	);
}
