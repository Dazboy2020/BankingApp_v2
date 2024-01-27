import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';
import { useModalContext } from '../../context/modalContext';
import { useTransactionContext } from '../../context/transactionContext';
import useAddBudget from '../../hooks/useAddBudget';

function DeleteButton({ expense, type, userId, formBudget, setFormBudget }) {
	const { id, setId, dispatch } = useAppContext();
	const { setExpenseType } = useTransactionContext();
	const { addBudget } = useAddBudget();

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
		if (type === 'deposit' || type === 'expense') {
			setModalTitle('Warning! Deletion!');
			setModalMessage('Are you sure you want to delete this item?');
			setModalAction('delete');
			setId(expense);
			setExpenseType(type);
			setOpen(true, modalMessage, modalTitle, modalAction, id);
			console.log(id);
		}

		if (type === 'budget') {
			addBudget(userId, formBudget);
			dispatch({ type: 'user/deleteBudget', payload: formBudget });
			setFormBudget('');
		}
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
