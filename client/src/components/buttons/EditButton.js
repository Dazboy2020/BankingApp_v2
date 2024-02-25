import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { useAppContext } from '../../context/context';
import { useTransactionContext } from '../../context/transactionContext';
import { motion } from 'framer-motion';

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
			component={motion.button}
			whileTap={{ scale: 1.1 }}
			transition={{ type: 'spring', stiffness: 500 }}
			variant="contained"
			startIcon={
				<CreateIcon
					sx={{
						color: 'white',
						ml: '10px',
					}}
				/>
			}
			onClick={() => handleEditClick(expense)}
		></Button>
	);
}

export default EditButton;
