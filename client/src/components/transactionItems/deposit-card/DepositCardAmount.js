import { Box } from '@mui/material';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function DepositCardAmount({ deposit }) {
	const { isDarkMode } = useDarkMode();
	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<span
				className={
					isDarkMode ? classes.movements__value__dark : classes.movements__value
				}
			>
				€{deposit.amount.toFixed(2)}
			</span>
		</Box>
	);
}

export default DepositCardAmount;
