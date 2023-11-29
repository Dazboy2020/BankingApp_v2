import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';

const buttonStyles = {
	// color: 'white',
	// fontSize: '1.1rem',
	// letterSpacing: '.1rem',
	// paddingRight: '.8rem',
	// mr: '10px',
	// fontWeight: '500',
	// mt: '.3rem',
	// pl: '1rem',
};

function DeleteButton({ expense }) {
	const {
		modalMessage,
		setModalMessage,
		modalTitle,
		setModalTitle,
		modalAction,
		setModalAction,
		id,
		setId,
		setOpen,
	} = useAppContext();

	function handleDelete(expense) {
		setModalTitle('Warning! Deletetion!');
		setModalMessage('Are you sure you want to delete this item?');
		setModalAction('delete');
		setId(expense);
		setOpen(true, modalMessage, modalTitle, modalAction, id);
	}

	return (
		<Button
			sx={buttonStyles}
			variant="contained"
			startIcon={
				<DeleteIcon
				// sx={{
				// 	color: 'white',
				// 	ml: '6px',
				// }}
				/>
			}
			onClick={() => handleDelete(expense)}
		></Button>
	);
}

export default DeleteButton;
