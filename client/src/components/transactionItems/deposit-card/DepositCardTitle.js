import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box } from '@mui/material';
import classes from '../layout/Movements.module.css';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function DepositCardTitle() {
	const { isDarkMode } = useDarkMode();
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<span
				className={
					isDarkMode ? classes.movements__type__dark : classes.movements__type
				}
			>
				Income
			</span>
			<NorthEastIcon sx={{ fontSize: '40px', color: 'green' }} />
		</Box>
	);
}

export default DepositCardTitle;
