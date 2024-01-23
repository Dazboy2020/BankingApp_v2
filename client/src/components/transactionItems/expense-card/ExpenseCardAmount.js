import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box } from '@mui/material';
import classes from '../Movements.module.css';

function ExpenseCardAmount({ expense }) {
	const { isDarkMode } = useDarkMode();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
			}}
		>
			<span
				className={
					isDarkMode ? classes.movements__value__dark : classes.movements__value
				}
			>
				€{expense.amount.toFixed(2)}
			</span>
		</Box>
	);
}

export default ExpenseCardAmount;
