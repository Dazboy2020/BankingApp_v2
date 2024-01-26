import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box, Typography } from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';

function ExpenseCardTitle() {
	const { isDarkMode } = useDarkMode();

	const titleStyling = {
		backgroundColor: isDarkMode ? '#212529' : '#495057',
		fontSize: '1.2rem',
		textTransform: 'uppercase',
		letterSpacing: '0.1rem',
		color: ' #fff',
		padding: '0.5rem',
		width: '15rem',
		mb: '0.1rem',
		borderRadius: '8px',
		fontWeight: 600,
	};

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>
				<Typography sx={titleStyling}>Expense</Typography>
			</span>
			<SouthEastIcon sx={{ fontSize: '40px', color: 'red' }} />
		</Box>
	);
}

export default ExpenseCardTitle;
