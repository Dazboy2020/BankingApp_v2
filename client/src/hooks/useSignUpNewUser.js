import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';

import axios from 'axios';

import { getErrorMessage } from '../utils/errorUtils';

export default function useSignUpNewUser() {
	const { dispatch } = useAppContext();
	const { setOpenToast, message, setMessage } = useModalContext();

	const signUpNewUser = async (username, email, password, confirmPassword) => {
		try {
			dispatch({ type: 'isLoading', payload: true });
			const { data } = await axios.post('/register', {
				username,
				email,
				password,
				confirmPassword,
			});

			console.log(data);
			setMessage('Account Created!');
			setOpenToast(true, { message: message });
			dispatch({ type: 'isLoading', payload: false });
			return data;
		} catch (error) {
			dispatch({ type: 'isLoading', payload: false });
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}
	};

	return { signUpNewUser };
}
