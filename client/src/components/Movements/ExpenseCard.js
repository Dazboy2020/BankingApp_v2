import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { useAppContext } from '../../context/context';
import SouthEastIcon from '@mui/icons-material/SouthEast';

import useDeleteExpense from '../../Hooks/useDeleteExpense';
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';

const buttonStyles = {
	// bgcolor: '#f70776',
	color: 'white',
	fontSize: '1.1rem',
	letterSpacing: '.1rem',
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
	const { dispatch, state } = useAppContext();

	//! Edit an Item
	function handleEditClick(id) {
		if (!id) return;
		let expenseToEdit = state.expenses.filter((ex) => ex.id === id);

		dispatch({ type: 'edit/expense', payload: expenseToEdit });
	}

	const expenseEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<Paper
			className={classes.movements}
			sx={{
				border: state.isEditing ? '1px solid purple' : '',
				borderRadius: '10px',
			}}
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
						{state.isActive !== 0 && !state.isEditing && (
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
							// <EditButton expense={expense.id} />
						)}

						<DeleteButton expense={expense.id} />
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
