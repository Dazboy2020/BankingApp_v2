import { useEffect } from 'react';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

function useAutoLogin() {
	const { state } = useAppContext();

	const navigate = useNavigate();

	useEffect(
		function () {
			if (state.user) {
				navigate('/overview');
			}
		},
		[navigate, state.user]
	);
}

export default useAutoLogin;
