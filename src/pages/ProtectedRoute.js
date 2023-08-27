import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
	const { user } = useAppContext();

	const navigate = useNavigate();

	useEffect(
		function () {
			if (!user) navigate('/');
		},
		[user, navigate]
	);

	return user ? children : null;
}

export default ProtectedRoute;
