import { useModalContext } from '../context/modalContext';
import useAsyncHandler from './useAsyncHandler';
import { config } from './config';
import axios from 'axios';

export default function useAddBudget() {
	const { setOpenToast, message, setMessage } = useModalContext();

	const { asyncHandler } = useAsyncHandler();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addBudget = asyncHandler(async (userId, newBudgetAmount) => {
		const currentDate = new Date();
		const response = await axios.put(
			`/edit-budget/${userId}`,
			{
				budgetAmount: newBudgetAmount,
				budgetDate: currentDate.toISOString(),
			},
			config
		);

		if (!response) return;

		setMessage('Budget Successfully updated!');
		setOpenToast(true, { message: message });
	});

	return { addBudget };
}
