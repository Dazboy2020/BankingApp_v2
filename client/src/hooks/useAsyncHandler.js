import { useModalContext } from '../context/modalContext';
import { getErrorMessage } from '../utils/errorUtils';

const useAsyncHandler = () => {
	const { setOpenToast, setMessage } = useModalContext();

	const asyncHandler =
		(asyncFn) =>
		async (...args) => {
			try {
				return await asyncFn(...args);
			} catch (error) {
				console.error('Error:', error);
				const errorMessage = getErrorMessage(error);
				setMessage(errorMessage);
				setOpenToast(true, { message: errorMessage });
			}
		};

	return { asyncHandler };
};

export default useAsyncHandler;
