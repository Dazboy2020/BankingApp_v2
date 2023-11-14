import axios from 'axios';
import { useEffect } from 'react';
import { useAppContext } from '../context/context';

export function useFetchPrivateUserData(url) {
	const { dispatch } = useAppContext();

	//! useEffect to check whether authToken store in localStorage
	useEffect(() => {
		const fetchPrivateUserData = async () => {
			const authToken = localStorage.getItem('authToken');

			if (!authToken) return;

			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('authToken')}`,
				},
			};

			try {
				const { data: userData } = await axios.get(url, config);

				// if (!userData) return <SignIn />;
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
			}
		};

		fetchPrivateUserData();
	}, [dispatch, url]);
}
