import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
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

function EditButton(expense) {
	const { dispatch, state } = useAppContext();

	//! Edit an Item
	function handleEditClick(id) {
		let expenseToEdit = state.expenses.filter((ex) => ex.id === id);

		dispatch({ type: 'edit/expense', payload: expenseToEdit });
	}

	return (
		<Button
			sx={buttonStyles}
			variant="contained"
			startIcon={
				<CreateIcon
					sx={{
						color: 'white',
						mr: '2px',
					}}
				/>
			}
			onClick={() => handleEditClick(expense)}
		>
			Edit
		</Button>
	);
}

export default EditButton;
