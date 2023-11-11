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

function EditButton(expense, type) {
	const { dispatch, state } = useAppContext();

	//! Edit an Item
	function handleEditClick({ expense, type }) {
		let itemToEdit;

		type === 'deposit'
			? (itemToEdit = state.deposits.filter((ex) => ex.id === expense))
			: (itemToEdit = state.expenses.filter((ex) => ex.id === expense));

		if (state.isActive === 1)
			dispatch({ type: 'edit/expense', payload: itemToEdit });

		if (state.isActive === 2)
			dispatch({ type: 'edit/deposit', payload: itemToEdit });
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
