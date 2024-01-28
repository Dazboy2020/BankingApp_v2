import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { useDepositCardContext } from '../../../context/depositCardContext';
import { amountStyling } from '../cardStyling';

function DepositCardAmount() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<span>
				<Typography sx={amountStyling(isDarkMode)}>
					€{deposit.amount}
				</Typography>
			</span>
		</Box>
	);
}

export default DepositCardAmount;
