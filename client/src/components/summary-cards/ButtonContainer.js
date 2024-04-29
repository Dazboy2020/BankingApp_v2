import { useAppContext } from '../../context/context';
import { useTheme } from '@emotion/react';
import { Box, Button, useMediaQuery } from '@mui/material';
import DatePickerValue from '../datePicker/DatePicker';
import { motion } from 'framer-motion';

const buttonStyles = {
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
			<DatePickerValue labelName="Select Date" />
			<Button
				component={motion.button}
				whileTap={{ scale: 1.2 }}
				transition={{ type: 'spring', stiffness: 500 }}
				variant="contained"
				sx={buttonStyles}
				onClick={handleSubmitExpense}
			>
				+
			</Button>
			{state.isEditing && (
				<Button
					component={motion.button}
					whileTap={{ scale: 1.1 }}
					transition={{ type: 'spring', stiffness: 500 }}
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
