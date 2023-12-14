import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';
// import SpinnerFullPage from '../components/spinner/SpinnerFullPage';

function ProtectedRoute({ children }) {
	const { state } = useAppContext();

	const navigate = useNavigate();

	useEffect(
		function () {
			if (!state.user) navigate('/');
		},
		[state.user, navigate]
	);

	// if (!state.user && state.isLoading) {
	// 	return <SpinnerFullPage />;
	// }

	return state.user ? children : null;
}

export default ProtectedRoute;
