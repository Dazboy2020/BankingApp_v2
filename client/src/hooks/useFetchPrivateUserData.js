import axios from 'axios';
import { useEffect } from 'react';
import { useAppContext } from '../context/context';

export function useFetchPrivateUserData(url) {
	const { dispatch } = useAppContext();

	//? useEffect to check whether authToken store in localStorage and if so, retrieve user data via middleware protected route

	useEffect(() => {
		const fetchPrivateUserData = async () => {
			const authToken = localStorage.getItem('authToken');

			if (!authToken) return;
			dispatch({ type: 'isLoading', payload: true });

			const config = {
				headers: {
					'Content-Type': 'application/json',
					// Authorization: `Bearer ${localStorage.getItem('authToken')}`,
					Authorization: `Bearer ${authToken}`,
				},
			};

			try {
				const { data: userData } = await axios.get(url, config);

				if (!userData) return;

				console.log('fetch private data:', userData);
				dispatch({
					type: 'user/MongoLoggedIn',
					payload: {
						user: userData.user,
						// token: userData.token,
					},
				});
			} catch (error) {
				localStorage.removeItem('authToken');
				dispatch({ type: 'isLoading', payload: false });
			} finally {
				dispatch({ type: 'isLoading', payload: false });
			}
		};

		fetchPrivateUserData();
	}, [dispatch, url]);
}
