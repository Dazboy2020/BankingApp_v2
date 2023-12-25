import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignIn from '../pages/SignIn';
import { useModalContext } from '../context/modalContext';

export default function useGetUserToken() {
	const { dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const navigate = useNavigate();

	const getUserToken = async (data) => {
		try {
			dispatch({ type: 'isLoading', payload: true });

			const { data: userData } = await axios.post('/login', data);

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
			dispatch({ type: 'isLoading', payload: false });

			if (error) {
				setMessage(error.message ?? 'An error occurred');
				setOpenToast(true, { message: message });
			}

			console.log(error);
		}
	};

	return { getUserToken };
}
