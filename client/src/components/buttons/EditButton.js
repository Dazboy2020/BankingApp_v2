import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { useAppContext } from '../../context/context';
import { useTransactionContext } from '../../context/transactionContext';

function EditButton(expense) {
	const { dispatch, state } = useAppContext();
	const { setExpenseType } = useTransactionContext();

	//! Edit an Item
	function handleEditClick({ expense, type }) {
		let itemToEdit;

		if (type === 'deposit') {
			setExpenseType('deposit');
			itemToEdit = state.deposits.filter((ex) => ex.id === expense);
			dispatch({ type: 'edit/deposit', payload: itemToEdit });
		}

		if (type === 'expense') {
			setExpenseType('expense');
			itemToEdit = state.expenses.filter((ex) => ex.id === expense);
			dispatch({ type: 'edit/expense', payload: itemToEdit });
		}
	}

	return (
		<Button
			variant="contained"
			startIcon={
				<CreateIcon
					sx={{
						color: 'white',
						ml: '6px',
					}}
				/>
			}
			onClick={() => handleEditClick(expense)}
		></Button>
	);
}

export default EditButton;
