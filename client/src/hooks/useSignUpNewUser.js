import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';

import axios from 'axios';

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
			if (data.error) {
				setMessage(data.error);
				setOpenToast(true, { message: message });
				dispatch({ type: 'isLoading', payload: false });
			} else {
				setMessage('Account Created!');
				setOpenToast(true, { message: message });
				dispatch({ type: 'isLoading', payload: false });
				return data;
			}
		} catch (error) {
			console.log(error);
			setMessage(error?.response.data.error);
			setOpenToast(true, { message: message });
			dispatch({ type: 'isLoading', payload: false });
		}
	};

	return { signUpNewUser };
}
