import { Typography } from '@mui/material';
import { useDepositCardContext } from '../../../context/depositCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';

function DepositCardCategory() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

	const categoryStyling = {
		fontFamily: 'system-ui',
		fontSize: '1.2rem',
		color: isDarkMode ? '#d6d3d1' : '#000',
		pl: 0.5,
	};

	return (
		<span>
			<Typography sx={categoryStyling}>{deposit.category}</Typography>
		</span>
	);
}

export default DepositCardCategory;
