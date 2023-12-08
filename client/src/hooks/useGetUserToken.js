import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignIn from '../pages/SignIn';
import { BASE_URL } from '../utils/BASE_URL';

export default function useGetUserToken() {
	const { dispatch, setMessage, setOpenToast, message } = useAppContext();

	const navigate = useNavigate();

	const getUserToken = async (data) => {
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
				setMessage('Welcome Back!');
				setOpenToast(true, { message: message });
				console.log('getUserToken:', userData);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { getUserToken };
}
