import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function DepositCardTitle() {
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
				<Typography sx={titleStyling}>Income</Typography>
			</span>
			<NorthEastIcon sx={{ fontSize: '40px', color: 'green' }} />
		</Box>
	);
}

export default DepositCardTitle;
