import { Typography } from '@mui/material';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { categoryStyling } from '../cardStyling';

function ExpenseCardCategory() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

	return (
		<span>
			<Typography sx={categoryStyling(isDarkMode)}>
				{expense.category}
			</Typography>
		</span>
	);
}

export default ExpenseCardCategory;
