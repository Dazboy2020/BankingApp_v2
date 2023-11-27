import { Box, Button, useMediaQuery } from '@mui/material';
import { useAppContext } from '../../context/context';
import DatePickerValue from '../datePicker/DatePicker';
import { useTheme } from '@emotion/react';

const buttonStyles = {
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},

	color: 'white',
	ml: { xs: 1, s: 0 },
	fontSize: '1.1rem',
};

function ButtonContainer({ handleSubmitExpense, handleCancelEdit }) {
	const { state } = useAppContext();

	const theme = useTheme();
	const isMdAndAbove = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box
			display="flex"
			justifyContent={isMdAndAbove ? 'flex-start' : 'space-between'}
			alignItems="center"
		>
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
