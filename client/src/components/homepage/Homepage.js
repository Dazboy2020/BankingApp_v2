import { useAppContext } from '../../context/context';
import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
import { Box } from '@mui/material';
// const ResponsiveAppBar = lazy(() => import('../navbar/NewNav'));
// import { lazy } from 'react';

import SpinnerFullPage from '../spinner/SpinnerFullPage';
import UnprotectedPageLayout from '../../pages/layout/UnprotectedPageLayout';
import HeroSection from './HeroSection';
import GridSection from './GridSection';

export default function Homepage() {
	const { state } = useAppContext();
	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData('/userdata');

	//? if user is in state then redirects to /overview
	useAutoLogin();

	return state.isLoading ? (
		<SpinnerFullPage />
	) : (
		<UnprotectedPageLayout>
			<Box
				component="section"
				sx={{
					ml: { xs: 5, s: 12, md: 12, lg: 16, xl: 30 },
					mr: { xs: 5, s: 12, md: 12, lg: 16, xl: 30 },
				}}
			>
				<HeroSection />
				<GridSection />
			</Box>
		</UnprotectedPageLayout>
	);
}
