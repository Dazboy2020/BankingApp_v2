import { useAppContext } from '../context/context';
import axios from 'axios';
import SignIn from '../pages/SignIn';
import { useNavigate } from 'react-router-dom';

export default function useGetUserData() {
	const { dispatch, setMessage, setOpenToast } = useAppContext();

	const navigate = useNavigate();

	const getUserData = async (data) => {
		const BASE_URL = 'http://localhost:5000';

		try {
			dispatch({ type: 'isLoading', payload: true });

			const { data: userData } = await axios.post(`${BASE_URL}/login`, data);

			if (userData.error) {
				setMessage(userData.error);
				setOpenToast(true, { message: userData.error });
				dispatch({ type: 'isLoading', payload: false });

				return <SignIn />;
			} else {
				dispatch({ type: 'isLoading', payload: false });

				localStorage.setItem('authToken', userData.token);
				navigate('/overview');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { getUserData };
}
