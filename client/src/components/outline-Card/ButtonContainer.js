import { Box, Button } from '@mui/material';
import { useAppContext } from '../../context/context';
import DatePickerValue from '../datePicker/DatePicker';

const buttonStyles = {
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},

	color: 'white',
	mr: 1,
	ml: { xs: 1, s: 0 },
	fontSize: '1.1rem',
};

function ButtonContainer({ handleSubmitExpense, handleCancelEdit }) {
	const { state } = useAppContext();

	return (
		<Box display="flex" alignItems="center">
			<DatePickerValue />
			<Button
				variant="contained"
				sx={buttonStyles}
				onClick={handleSubmitExpense}
			>
				+
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
