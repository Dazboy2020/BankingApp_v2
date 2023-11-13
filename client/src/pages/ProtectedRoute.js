import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';

import SignIn from '../pages/SignIn';
import Homepage from '../components/Homepage/Homepage';

function ProtectedRoute({ children }) {
	const { state } = useAppContext();

	const navigate = useNavigate();

	useEffect(
		function () {
			if (!state.isLoggedIn) navigate('/');
		},
		[state.isLoggedIn, navigate]
	);

	return state.isLoggedIn ? children : null;
}

export default ProtectedRoute;
