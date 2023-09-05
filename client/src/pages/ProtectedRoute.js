import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';

import SignIn from '../pages/SignIn';

function ProtectedRoute({ children }) {
	const { state } = useAppContext();

	const navigate = useNavigate();

	useEffect(
		function () {
			if (!state.user) navigate('/login');
		},
		[state.user, navigate]
	);

	return state.user ? children : <SignIn />;
}

export default ProtectedRoute;
