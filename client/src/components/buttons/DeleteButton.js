import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';

function DeleteButton({ expense }) {
	const {
		modalMessage,
		setModalMessage,
		modalTitle,
		setModalTitle,
		modalAction,
		setModalAction,
		id,
		setId,
		setOpen,
	} = useAppContext();

	function handleDelete(expense) {
		setModalTitle('Warning! Deletetion!');
		setModalMessage('Are you sure you want to delete this item?');
		setModalAction('delete');
		setId(expense);
		setOpen(true, modalMessage, modalTitle, modalAction, id);
	}

	return (
		<Button
			sx={{ ml: '6px' }}
			variant="contained"
			startIcon={
				<DeleteIcon
					sx={{
						color: 'white',
						ml: '6px',
					}}
				/>
			}
			onClick={() => handleDelete(expense)}
		></Button>
	);
}

export default DeleteButton;
