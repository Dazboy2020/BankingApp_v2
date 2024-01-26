import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { useDepositCardContext } from '../../../context/depositCardContext';

function DepositCardAmount() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

	const amountStyling = {
		fontSize: '1.2rem',
		ml: 'auto',
		fontWeight: 'bold',
		color: isDarkMode ? '#d6d3d1' : '#000',
		pl: 0.5,
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<span>
				<Typography sx={amountStyling}>€{deposit.amount}</Typography>
			</span>
		</Box>
	);
}

export default DepositCardAmount;
