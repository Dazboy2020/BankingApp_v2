import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box, Typography } from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { titleStyling } from '../cardStyling';

function ExpenseCardTitle() {
	const { isDarkMode } = useDarkMode();

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>
				<Typography sx={titleStyling(isDarkMode)}>Expense</Typography>
			</span>
			<SouthEastIcon sx={{ fontSize: '40px', color: 'red' }} />
		</Box>
	);
}

export default ExpenseCardTitle;
