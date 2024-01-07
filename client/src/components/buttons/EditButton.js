import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { useAppContext } from '../../context/context';

function EditButton(expense, type) {
	const { dispatch, state } = useAppContext();

	//! Edit an Item
	function handleEditClick({ expense, type }) {
		let itemToEdit;

		if (type === 'deposit') {
			itemToEdit = state.deposits.filter((ex) => ex.id === expense);
			dispatch({ type: 'edit/deposit', payload: itemToEdit });
		}

		if (type === 'expense') {
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
