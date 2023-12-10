import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
import { BASE_URL } from '../../utils/BASE_URL';
import { useAppContext } from '../../context/context';
import { Box, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import { lazy } from 'react';

const ResponsiveAppBar = lazy(() => import('../navbar/NewNav'));

const textStyles = {
	fontFamily: 'poppins',
	fontSize: 'h4.fontSize',
	color: 'antiquewhite',
	textAlign: 'center',
	mt: 5,
	letterSpacing: 1,
	fontWeight: 300,
};

const containerVariants = {
	hidden: {
		opacity: 0,
		scale: [0.8, 0.9, 1],
		y: 100,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,

		transition: {
			type: 'spring',
			mass: 0.5,
			stiffness: 100,
			duration: 0.2,
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
				<m.div
					layout="true"
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
					variants={containerVariants}
					key="header"
				>
					<Box
						component="main"
						sx={{
							minHeight: '100dvh',
							backgroundColor: '#343a40',
						}}
					>
						<Typography component="section">
							<Box
								sx={{
									fontFamily: 'poppins',
									fontSize: 'h1.fontSize',
									color: 'antiquewhite',
									textAlign: 'center',
									mt: 10,
									letterSpacing: 0.9,
									fontWeight: '300',
								}}
							>
								Welcome to Expensify.
							</Box>

							<Box sx={textStyles}>
								An all-in-one solution for managing your expenses.
							</Box>

							<Box sx={textStyles}>
								Expensify provides in-depth analysis of your finances.
							</Box>

							<Box sx={textStyles}>
								Easily target key spending patterns via powerful sorting and
								filtering functionality.
							</Box>
						</Typography>
					</Box>
				</m.div>
			</>
		);
	}

	return null;
}
