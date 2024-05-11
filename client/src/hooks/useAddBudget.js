import { useModalContext } from '../context/modalContext';
import { config } from './config';
import axios from 'axios';

import { getErrorMessage } from '../utils/errorUtils';

export default function useAddBudget() {
	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addBudget = async (userId, newBudgetAmount) => {
		try {
			const currentDate = new Date();
			const response = await axios.put(
				`/edit-budget/${userId}`,
				{
					budgetAmount: newBudgetAmount,
					budgetDate: currentDate.toISOString(),
				},
				config
			);

			setMessage('Budget Successfully updated!');
			setOpenToast(true, { message: message });

			console.log('Budget updated successfully:', response.data);
		} catch (error) {
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}
	};

	return { addBudget };
}
