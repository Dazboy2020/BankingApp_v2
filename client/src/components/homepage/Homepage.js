import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
import { BASE_URL } from '../../utils/BASE_URL';
import { useAppContext } from '../../context/context';
import { Box, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import TestSection from '../lottie/TestSection';
// const ResponsiveAppBar = lazy(() => import('../navbar/NewNav'));
// import { lazy } from 'react';

import ResponsiveAppBar from '../navbar/NewNav';
import CardGrid from './cardGrid/CardGrid';
import GoogleLoginButton from '../buttons/GoogleLogin';
import {
	buttonVariant,
	containerVariants,
	exitAnimation,
	titleVariant,
} from './variants';

// import SpinnerFullPage from '../spinner/SpinnerFullPage';

const textStyles = {
	fontFamily: 'system-ui',
	fontSize: { xs: '1.25rem', s: '1.25rem', sm: '1.5rem', md: '1.5rem' },
	color: 'antiquewhite',
	textAlign: 'center',
	mt: 1,
	letterSpacing: 1,
	fontWeight: 400,
};

export default function Homepage() {
	const { state, user } = useAppContext();
	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData(`${BASE_URL}/userdata`);

	//? if user is in state then redirects to /overview
	useAutoLogin();

	if (!user && !state.isLoading) {
		return (
			<>
				<Box
					component="main"
					sx={{
						minHeight: '100dvh',
						minWidth: '100%',
						backgroundColor: '#222',
					}}
				>
					<ResponsiveAppBar />
					<Box
						component="section"
						sx={{
							ml: { xs: 5, s: 12, md: 12, lg: 16, xl: 30 },
							mr: { xs: 5, s: 12, md: 12, lg: 16, xl: 30 },
							mt: 4,
						}}
					>
						<Typography component="section">
							<Box
								component={m.div}
								layout="true"
								initial="hidden"
								animate="visible"
								exit={exitAnimation}
								variants={containerVariants}
								key="header"
								sx={{
									fontFamily: 'poppins',
									fontSize: { xs: '3rem', s: '3rem', sm: '4rem', md: '6rem' },
									color: 'antiquewhite',
									textAlign: 'center',
									mt: { xs: 4, sm: 3.5, md: 5 },
									letterSpacing: -1,
									fontWeight: '300',
									pt: 10,
									pb: 10,
									borderRadius: 3,
									background: 'linear-gradient(to right, #3c1053, #ad5389)',
									position: 'relative',
									mb: { xs: 4 },
								}}
							>
								Welcome to Expensify.
								<Box
									component={m.div}
									layout="true"
									initial="hidden"
									sx={textStyles}
									variants={titleVariant}
									animate="visible"
									exit={exitAnimation}
									key="subtitle"
								>
									Expense management simplified.
								</Box>
								<Box
									component={m.div}
									layout="true"
									initial="hidden"
									variants={buttonVariant}
									animate="visible"
									exit={exitAnimation}
									key="button"
									sx={{
										position: 'absolute',
										left: 10,
										bottom: 10,
									}}
								>
									<GoogleLoginButton
										height="3.5rem"
										width="12rem"
										padding={0}
									/>
								</Box>
							</Box>
						</Typography>
						<section>
							<Box sx={{ mt: { xs: 4, sm: 8, md: 10, lg: 15, xl: 20 } }}>
								<Typography
									sx={{
										fontFamily: 'system-ui',
										fontSize: {
											xs: '1.5rem',
											s: '2rem',
											sm: '2rem',
											md: '2rem',
										},
										color: 'antiquewhite',
										textAlign: 'center',
										mt: { xs: '1.5rem', s: '2rem', sm: '2rem', md: 2 },
										letterSpacing: -1,
										fontWeight: '300',
										pt: 2,
										pb: 2,
									}}
								>
									Getting started is easy.
								</Typography>
							</Box>
							<CardGrid />
						</section>
					</Box>
				</Box>
				<TestSection />
			</>
		);
	}

	return <Homepage />;
}
