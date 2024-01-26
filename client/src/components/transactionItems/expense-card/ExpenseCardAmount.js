import { useDarkMode } from '../../../hooks/useDarkMode';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { Box } from '@mui/material';
import classes from '../layout/Movements.module.css';

function ExpenseCardAmount() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

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
				€{expense.amount}
			</span>
		</Box>
	);
}

export default ExpenseCardAmount;
