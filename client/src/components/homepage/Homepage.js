import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
import { useAppContext } from '../../context/context';
import { Box, Stack, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import TestSection from '../lottie/TestSection';
// const ResponsiveAppBar = lazy(() => import('../navbar/NewNav'));
// import { lazy } from 'react';

import ResponsiveAppBar from '../navbar/NavBar';
import CardGrid from './cardGrid/CardGrid';
import GoogleLoginButton from '../buttons/GoogleLogin';
import { buttonVariant, exitAnimation, subtitleVariant } from './variants';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import SpinnerFullPage from '../spinner/SpinnerFullPage';

// import SpinnerFullPage from '../spinner/SpinnerFullPage';

export default function Homepage() {
	const { state } = useAppContext();
	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData('/userdata');

	//? if user is in state then redirects to /overview
	useAutoLogin();

	return state.isLoading ? (
		<SpinnerFullPage />
	) : (
		<>
			<Box
				component="main"
				sx={{
					minHeight: '100dvh',
					minWidth: '100%',

					backgroundImage:
						'repeating-radial-gradient(circle at center center, transparent 0px, transparent 11px,rgba(255,255,255,0.04) 11px, rgba(255,255,255,0.04) 19px,transparent 19px, transparent 29px,rgba(255,255,255,0.04) 29px, rgba(255,255,255,0.04) 33px),repeating-radial-gradient(circle at center center, rgb(0,0,0) 0px, rgb(0,0,0) 5px,rgb(0,0,0) 5px, rgb(0,0,0) 17px,rgb(0,0,0) 17px, rgb(0,0,0) 30px,rgb(0,0,0) 30px, rgb(0,0,0) 43px,rgb(0,0,0) 43px, rgb(0,0,0) 45px,rgb(0,0,0) 45px, rgb(0,0,0) 47px); background-size: 53px 53px',
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
					<Stack
						direction={{ xs: 'column', md: 'column', lg: 'row' }}
						spacing={2}
						sx={{
							alignItems: 'center',
							mt: { xs: 4, sm: 3.5, md: 4 },
						}}
					>
						<MainHeader />
						<SubHeader />
					</Stack>

					<section>
						<Box
							sx={{ mt: { xs: 4, sm: 8, md: 10, lg: 15 } }}
							component={m.div}
							layout="true"
							initial="hidden"
							variants={subtitleVariant}
							animate="visible"
							exit={exitAnimation}
						>
							<Typography
								sx={{
									fontFamily: 'system-ui',
									fontSize: {
										xs: '1.2rem',
										s: '1.5rem',
										sm: '1.5rem',
										md: '2rem',
									},
									color: 'antiquewhite',
									textAlign: 'center',
									mt: { xs: '1.5rem', s: '1.5rem', sm: '1.5rem' },
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
					<Box
						component={m.div}
						layout="true"
						initial="hidden"
						variants={buttonVariant}
						animate="visible"
						exit={exitAnimation}
						key="button"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							pb: 4,
						}}
					>
						<GoogleLoginButton height="4rem" width="15rem" padding={0} />
					</Box>
				</Box>
			</Box>
			<TestSection />
		</>
	);
}
