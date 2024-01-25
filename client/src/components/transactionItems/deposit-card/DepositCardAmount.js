import { Box } from '@mui/material';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';
import { useDepositCardContext } from '../../../context/depositCardContext';

function DepositCardAmount() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();
	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<span
				className={
					isDarkMode ? classes.movements__value__dark : classes.movements__value
				}
			>
				€{deposit.amount}
			</span>
		</Box>
	);
}

export default DepositCardAmount;
