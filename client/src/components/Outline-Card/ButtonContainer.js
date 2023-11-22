import { Box, Button } from '@mui/material';
import { useAppContext } from '../../context/context';
import DatePickerValue from '../DatePicker/DatePicker';

const buttonStyles = {
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},
	color: 'white',
	letterSpacing: '.1rem',
	mt: 4,
	mr: 2,
	ml: { xs: 2, s: 0 },
	fontSize: '1.1rem',
	paddingRight: '.8rem',
};

function ButtonContainer({ handleSubmitExpense, handleCancelEdit }) {
	const { state } = useAppContext();

	return (
		<Box display="flex" justifyContent="space-between" alignItems="baseline">
			<DatePickerValue />
			<Button
				variant="contained"
				sx={buttonStyles}
				onClick={handleSubmitExpense}
			>
				{!state.isEditing ? '+' : 'Edit'}
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
