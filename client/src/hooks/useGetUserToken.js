import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getErrorMessage } from '../utils/errorUtils';

export default function useGetUserToken() {
	const { dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const navigate = useNavigate();

	const getUserToken = async (data) => {
		try {
			dispatch({ type: 'isLoading', payload: true });

			const { data: userData } = await axios.post('/login', data);

			dispatch({ type: 'isLoading', payload: false });

			localStorage.setItem('authToken', userData.token);
			navigate('/overview');
			setMessage('Welcome Back!');
			setOpenToast(true, { message: message });
			dispatch({ type: 'user/addToken', payload: userData.token });
			console.log('getUserToken:', userData);
		} catch (error) {
			dispatch({ type: 'isLoading', payload: false });
			console.log(error);

			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}
	};

	return { getUserToken };
}
