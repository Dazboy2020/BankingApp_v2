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
			if (!state.isLoggedIn) <SignIn />;
		},
		[state.isLoggedIn, navigate]
	);

	return state.isLoggedIn ? children : <SignIn />;
}

export default ProtectedRoute;
