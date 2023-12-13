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

const textStyles = {
	fontFamily: 'poppins',
	fontSize: { xs: '1.5rem', s: '1.5rem', sm: '2rem', md: '3rem' },
	color: 'antiquewhite',
	textAlign: 'center',
	mt: 5,
	letterSpacing: 1,
	fontWeight: 300,
};

const containerVariants = {
	hidden: {
		opacity: 0,
		scale: [0],
		y: -100,
	},
	visible: {
		opacity: [1],
		scale: [0, 1],
		y: 0,

		transition: {
			type: 'tween',
			delay: 0.4,
		},
	},
};

const titleVariant = {
	hidden: {
		opacity: 0,
		y: '100%',
	},
	visible: {
		opacity: 1,
		y: 0,

		transition: {
			type: 'tween',
			duration: 0.5,
			delay: 1,
		},
	},
};
export const exitAnimation = {
	opacity: 0,
	transition: { duration: 0.2 },
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
				<ResponsiveAppBar />
				<div>
					<Box
						sx={{
							minHeight: '100dvh',
							backgroundColor: '#2d3436',
							backgroundImage:
								'linear-gradient(315deg, #2d3436 0%, #000000 74%)',
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
									fontSize: { xs: '2rem', s: '2rem', sm: '3rem', md: '6rem' },
									color: 'antiquewhite',
									textAlign: 'center',
									mt: { xs: 3.5, s: 3.5, sm: 3.5, md: 6 },
									letterSpacing: 0.9,
									fontWeight: '300',
								}}
							>
								Welcome to Expensify.
							</Box>

							<Box
								layout="true"
								initial="hidden"
								component={m.div}
								sx={textStyles}
								variants={titleVariant}
								animate="visible"
								exit={exitAnimation}
								key="subtitle"
							>
								An all-in-one solution for managing your expenses.
							</Box>
						</Typography>
					</Box>
					<TestSection />
				</div>
			</>
		);
	}

	return null;
}
