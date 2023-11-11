import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import useDeleteExpense from '../../Hooks/useDeleteExpense';
import useDeleteDeposit from '../../Hooks/useDeleteDeposit';
import { useAppContext } from '../../context/context';

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

function DeleteButton({ expense }) {
	const { state } = useAppContext();

	const { deleteExpense } = useDeleteExpense();
	const { deleteDeposit } = useDeleteDeposit();

	function handleDelete(expense) {
		if (state.isActive === 1) {
			deleteExpense(expense);
		} else {
			deleteDeposit(expense);
		}
	}

	return (
		<Button
			sx={buttonStyles}
			variant="contained"
			startIcon={
				<DeleteIcon
					sx={{
						color: 'white',
						mr: '2px',
					}}
				/>
			}
			onClick={() => handleDelete(expense)}
		>
			Delete
		</Button>
	);
}

export default DeleteButton;
