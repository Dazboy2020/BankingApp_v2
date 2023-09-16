import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';
import SouthEastIcon from '@mui/icons-material/SouthEast';

import axios from 'axios';

const buttonStyles = {
	// bgcolor: '#f70776',
	color: 'white',
	fontSize: '1rem',
	paddingRight: '.8rem',
	mr: '10px',
	fontWeight: '500',
	mt: '.3rem',
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},
};

function ExpenseCard({ expense }) {
	const { setOpenToast, dispatch, message, setMessage, state } =
		useAppContext();

	//! Edit an Item
	function handleEditClick(id) {
		let expenseToEdit = state.expenses.filter((ex) => ex.id === id);

		dispatch({ type: 'edit/expense', payload: expenseToEdit });
	}

	//! Delete an Item
	async function handleDelete(id) {
		let userId = state._id;
		console.log(userId, id);
		setMessage('');

		try {
			await axios.delete(`http://localhost:5000/deleteexpense/${userId}/${id}`);
			console.log('Expense deleted successfully');
		} catch (error) {
			console.error('Error deleting expense:', error);
		}

		dispatch({ type: 'addTransactionAnimate', payload: true });
		dispatch({ type: 'delete/expense', payload: id });

		setMessage('Expense item deleted!');
		setOpenToast(true, { message: message });
	}

	const expenseEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<Paper
			// key={Math.floor(Math.random() * 10000) + 1}
			className={classes.movements}
		>
			<Stack component="section" className={expenseEditMode}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<span className={classes.movements__type__expense}>Expense</span>
					<SouthEastIcon sx={{ fontSize: '40px', color: 'red' }} />
				</Box>
				<span className={classes.movements__date}>{expense.date}</span>
				<span className={classes.movements__category}>{expense.category}</span>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
					}}
				>
					<Box sx={{ mt: '2rem' }}>
						{state.isActive !== 0 && (
							<Button
								variant="contained"
								sx={buttonStyles}
								onClick={() => handleEditClick(expense.id)}
								startIcon={
									<CreateIcon
										sx={{
											color: 'white',
											mr: '2px',
										}}
									/>
								}
							>
								Edit
							</Button>
						)}
						<Button
							variant="contained"
							sx={buttonStyles}
							onClick={() => handleDelete(expense.id)}
							startIcon={
								<DeleteIcon
									sx={{
										color: 'white',
										mr: '2px',
									}}
								/>
							}
						>
							Delete
						</Button>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'flex-end',
						}}
					>
						<span className={classes.movements__value}>€{expense.amount}</span>
					</Box>
				</Box>
			</Stack>
		</Paper>
	);
}

export default ExpenseCard;
