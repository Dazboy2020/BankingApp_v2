import { useEffect } from 'react';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

function useAutoLogin() {
	const { state } = useAppContext();

	const navigate = useNavigate();

	useEffect(
		function () {
			if (!state.user) {
				console.log('NO USER FOUND => NO AUTO LOGIN', state.user);
				return;
			}

			if (state.user) {
				console.log('AUTO LOGIN: USER FOUND =>', state.user);
				navigate('/overview');
			}
		},
		[navigate, state.user]
	);
}

export default useAutoLogin;
