import axios from 'axios';
import { useEffect } from 'react';
import { useAppContext } from '../context/context';

export function useFetchPrivateData(url) {
	const { dispatch } = useAppContext();

	//! useEffect to check whether authToken store in localStorage
	useEffect(() => {
		console.log('fetch private data');

		const fetchPrivateData = async () => {
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
				dispatch({
					type: 'user/MongoLoggedIn',
					payload: {
						user: userData.user,
						token: userData.token,
					},
				});
			} catch (error) {
				localStorage.removeItem('authToken');
			}
		};

		fetchPrivateData();
	}, [dispatch, url]);
}
