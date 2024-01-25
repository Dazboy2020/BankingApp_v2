import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box } from '@mui/material';
import classes from '../Movements.module.css';
import { useExpenseCardContext } from '../../../context/expenseCardContext';

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
