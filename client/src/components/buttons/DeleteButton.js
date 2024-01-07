import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';
import { useModalContext } from '../../context/modalContext';
import { useTransactionContext } from '../../context/transactionContext';

function DeleteButton({ expense, type }) {
	const { id, setId } = useAppContext();
	const { setExpenseType } = useTransactionContext();

	const {
		modalTitle,
		setModalTitle,
		setOpen,
		modalMessage,
		setModalMessage,
		modalAction,
		setModalAction,
	} = useModalContext();

	function handleDelete(expense) {
		console.log(expense, type);
		setModalTitle('Warning! Deletion!');
		setModalMessage('Are you sure you want to delete this item?');
		setModalAction('delete');
		setId(expense);
		setExpenseType(type);
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
