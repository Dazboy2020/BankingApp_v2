import { useAppContext } from '../../context/context';
import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
// const ResponsiveAppBar = lazy(() => import('../navbar/NewNav'));
// import { lazy } from 'react';

import ResponsiveAppBar from '../navbar/NavBar';
import SpinnerFullPage from '../spinner/SpinnerFullPage';
import UnprotectedPageLayout from '../../pages/layout/UnprotectedPageLayout';
import HeroSection from './heroSection/HeroSection';
import GridSection from './GridSection';

export default function Homepage() {
	const { state } = useAppContext();
	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData('/userdata');

	//? if user is in state then redirects to /overview
	useAutoLogin();

	const gridComponentProps = {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const heroBackground =
		'repeating-radial-gradient(circle at center center, transparent 0px, transparent 11px,rgba(255,255,255,0.04) 11px, rgba(255,255,255,0.04) 19px,transparent 19px, transparent 29px,rgba(255,255,255,0.04) 29px, rgba(255,255,255,0.04) 33px),repeating-radial-gradient(circle at center center, rgb(0,0,0) 0px, rgb(0,0,0) 5px,rgb(0,0,0) 5px, rgb(0,0,0) 17px,rgb(0,0,0) 17px, rgb(0,0,0) 30px,rgb(0,0,0) 30px, rgb(0,0,0) 43px,rgb(0,0,0) 43px, rgb(0,0,0) 45px,rgb(0,0,0) 45px, rgb(0,0,0) 47px); background-size: 53px 53px';

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

			<UnprotectedPageLayout props={gridComponentProps}>
				<GridSection />
			</UnprotectedPageLayout>
		</>
	);
}
