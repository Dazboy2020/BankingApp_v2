import { Typography } from '@mui/material';
import { useDepositCardContext } from '../../../context/depositCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { categoryStyling } from '../cardStyling';

function DepositCardCategory() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

	return (
		<span>
			<Typography sx={categoryStyling(isDarkMode)}>
				{deposit.category}
			</Typography>
		</span>
	);
}

export default DepositCardCategory;
