import { Typography } from '@mui/material';
import { useDepositCardContext } from '../../../context/depositCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { dateStyling } from '../cardStyling';

function DepositCardDate() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

	return (
		<span>
			<Typography sx={dateStyling(isDarkMode)}>{deposit.date}</Typography>
		</span>
	);
}

export default DepositCardDate;
