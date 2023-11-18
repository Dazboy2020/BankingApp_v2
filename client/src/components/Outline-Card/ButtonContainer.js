import { Box, Button } from '@mui/material';
import { useAppContext } from '../../context/context';

const buttonStyles = {
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},
	color: 'white',
	letterSpacing: '.1rem',
	mt: 4,
	mr: 2,
	fontSize: '1.1rem',
	paddingRight: '.8rem',
};

function ButtonContainer({ handleSubmitExpense, handleCancelEdit }) {
	const { state } = useAppContext();

	return (
		<Box>
			<Button
				variant="contained"
				sx={buttonStyles}
				onClick={handleSubmitExpense}
			>
				{!state.isEditing ? 'Add item +' : 'Edit'}
			</Button>
			{state.isEditing && (
				<Button
					variant="contained"
					sx={buttonStyles}
					onClick={handleCancelEdit}
				>
					Cancel
				</Button>
			)}
		</Box>
	);
}

export default ButtonContainer;
