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

import NewNav from '../components/Navbar/NewNav';
import { NavLink } from 'react-router-dom';

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
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<>
			<NewNav />
			<ThemeProvider theme={defaultTheme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							// marginTop: 8,
							// display: 'flex',
							// flexDirection: 'column',
							// alignItems: 'center',
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
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="given-name"
										name="firstName"
										required
										fullWidth
										id="firstName"
										label="First Name"
										autoFocus
										color="secondary"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="family-name"
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
									<FormControlLabel
										control={
											<Checkbox value="allowExtraEmails" color="primary" />
										}
										label="I want to receive inspiration, marketing promotions and updates via email."
									/>
								</Grid>
							</Grid>
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
					</Box>
					<Copyright sx={{ mt: 5 }} />
				</Container>
			</ThemeProvider>
		</>
	);
}