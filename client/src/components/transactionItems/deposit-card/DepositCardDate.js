import { Typography } from '@mui/material';
import { useDepositCardContext } from '../../../context/depositCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';

function DepositCardDate() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

	const dateStyling = {
		fontFamily: 'system-ui',
		fontSize: '1rem',
		textTransform: 'uppercase',
		fontWeight: 500,
		mt: '5px',
		color: isDarkMode ? '#d6d3d1' : '#000',
		pl: 0.5,
	};

	return (
		<span>
			<Typography sx={dateStyling}>{deposit.date}</Typography>
		</span>
	);
}

export default DepositCardDate;
