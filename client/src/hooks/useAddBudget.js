import axios from 'axios';
import { config } from './config';
import { useModalContext } from '../context/modalContext';

export default function useAddBudget() {
	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addBudget = async (userId, newBudgetAmount) => {
		try {
			const response = await axios.put(
				`/edit-budget/${userId}`,
				{
					budgetAmount: newBudgetAmount,
				},
				config
			);

			setMessage('Budget Successfully updated!');
			setOpenToast(true, { message: message });

			console.log('Budget updated successfully:', response.data);
		} catch (error) {
			setMessage('Something went wrong!');
			setOpenToast(true, { message: message });
		}
	};

	return { addBudget };
}
