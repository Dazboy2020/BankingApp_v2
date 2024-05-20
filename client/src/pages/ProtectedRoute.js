import { Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/context';

function ProtectedRoute() {
	const { state } = useAppContext();

	console.log('ProtectedRoute component is rendering'); // Add this log

	// return state.user ? <Outlet /> : <Navigate to="/" />;

	if (state.user) {
		console.log('FRONTEND: ProtectedRoute: user is logged in');
		return <Outlet />;
	} else {
		console.log('FRONTEND: ProtectedRoute: user redirected to root');
		return <Navigate to="/" />;
	}
}

export default ProtectedRoute;
