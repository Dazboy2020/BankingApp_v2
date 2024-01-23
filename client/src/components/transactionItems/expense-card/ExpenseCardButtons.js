import { useAppContext } from '../../../context/context';
import { Box } from '@mui/material';
import DeleteButton from '../../buttons/DeleteButton';
import EditButton from '../../buttons/EditButton';

function ExpenseCardButtons({ expense }) {
	const { state } = useAppContext();

	return (
		<Box sx={{ mt: '2rem' }}>
			{state.isActive !== 0 && !state.isEditing && (
				<EditButton expense={expense.id} type="expense" />
			)}

			{state.isActive !== 0 && (
				<DeleteButton expense={expense.id} type="expense" />
			)}
		</Box>
	);
}

export default ExpenseCardButtons;
