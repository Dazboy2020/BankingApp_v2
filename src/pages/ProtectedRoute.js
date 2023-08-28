import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
	const { state } = useAppContext();
	console.log(state);

	const navigate = useNavigate();

	useEffect(
		function () {
			if (!state.user) navigate('/');
		},
		[state.user, navigate]
	);

	return state.user ? children : null;
}

export default ProtectedRoute;
