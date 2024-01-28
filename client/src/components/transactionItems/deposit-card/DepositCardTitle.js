import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { titleStyling } from '../cardStyling';

function DepositCardTitle() {
	const { isDarkMode } = useDarkMode();

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>
				<Typography sx={titleStyling(isDarkMode)}>Income</Typography>
			</span>
			<NorthEastIcon sx={{ fontSize: '40px', color: 'green' }} />
		</Box>
	);
}

export default DepositCardTitle;
