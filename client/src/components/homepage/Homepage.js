import { useAppContext } from '../../context/context';
import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
// const ResponsiveAppBar = lazy(() => import('../navbar/NewNav'));
// import { lazy } from 'react';

import ResponsiveAppBar from '../navbar/NavBar';
import SpinnerFullPage from '../spinner/SpinnerFullPage';
import UnprotectedPageLayout from '../../pages/layout/UnprotectedPageLayout';
import HeroSection from './heroSection/HeroSection';
import GridSection from './gridSection/GridSection';
import { heroBackground } from './homepage-utils';
import { gridBackground } from './homepage-utils';

export default function Homepage() {
	const { state } = useAppContext();
	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData('/userdata');

	//? if user is in state then redirects to /overview
	useAutoLogin();

	const gridComponentProps = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	return state.isLoading ? (
		<SpinnerFullPage />
	) : (
		<>
			<UnprotectedPageLayout
				appBar={<ResponsiveAppBar />}
				backgroundImage={heroBackground}
			>
				<HeroSection />
			</UnprotectedPageLayout>

			<UnprotectedPageLayout
				props={gridComponentProps}
				backgroundColor={gridBackground}
			>
				<GridSection />
			</UnprotectedPageLayout>
		</>
	);
}
