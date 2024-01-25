import { Box } from '@mui/material';
import { useAppContext } from '../../../context/context';
import EditButton from '../../buttons/EditButton';
import DeleteButton from '../../buttons/DeleteButton';
import { useDepositCardContext } from '../../../context/depositCardContext';

function DepositCardButtons() {
	const { state } = useAppContext();
	const { deposit } = useDepositCardContext();
	return (
		<Box sx={{ mt: '2rem' }}>
			{state.isActive !== 0 && !state.isEditing && (
				<EditButton expense={deposit.id} type="deposit" />
			)}
			{state.isActive !== 0 && (
				<DeleteButton expense={deposit.id} type="deposit" />
			)}
		</Box>
	);
}

export default DepositCardButtons;
