import { Typography } from '@mui/material';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { dateStyling } from '../cardStyling';

function ExpenseCardDate() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

	return (
		<span>
			<Typography sx={dateStyling(isDarkMode)}>{expense.date}</Typography>
		</span>
	);
}

export default ExpenseCardDate;
