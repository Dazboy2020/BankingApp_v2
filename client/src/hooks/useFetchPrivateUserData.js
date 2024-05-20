import { useAppContext } from '../context/context';
import axios from 'axios';
import { useEffect } from 'react';

export function useFetchPrivateUserData(url) {
	const { dispatch } = useAppContext();

	//? useEffect to check whether authToken store in localStorage and if so, retrieve user data via middleware protected route

	useEffect(() => {
		const fetchPrivateUserData = async () => {
			const authToken = localStorage.getItem('authToken');

			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};

			if (!authToken) {
				console.log('NO TOKEN: fetching private data ABORTED');
				return;
			}

			try {
				dispatch({ type: 'isLoading', payload: true });

				const { data: userData } = await axios.get(url, config);

				if (!userData) return;
				console.log('TOKEN FOUND: fetching private data...');

				dispatch({
					type: 'user/MongoLoggedIn',
					payload: {
						user: userData.user,
						token: userData.token,
					},
				});

				console.log('fetched private user data: SUCCESS', userData);
			} catch (error) {
				console.log(error);
				localStorage.removeItem('authToken');
				dispatch({ type: 'isLoading', payload: false });
			} finally {
				dispatch({ type: 'isLoading', payload: false });
			}
		};

		fetchPrivateUserData();
	}, [dispatch, url]);
}
