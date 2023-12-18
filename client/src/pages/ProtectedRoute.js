import { Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/context';

function ProtectedRoute() {
	const { state } = useAppContext();

	return state.user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
