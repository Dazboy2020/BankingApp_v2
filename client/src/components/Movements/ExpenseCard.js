import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import { Box } from '@mui/material';
import { useAppContext } from '../../context/context';
import SouthEastIcon from '@mui/icons-material/SouthEast';

import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';

function ExpenseCard({ expense }) {
	const { state } = useAppContext();

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
					<span className={classes.movements__type}>Expense</span>
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
							<EditButton expense={expense.id} type="expense" />
						)}

						{state.isActive !== 0 && <DeleteButton expense={expense.id} />}
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
