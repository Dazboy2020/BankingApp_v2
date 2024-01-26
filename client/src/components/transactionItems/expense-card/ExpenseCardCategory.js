import { Typography } from '@mui/material';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';

function ExpenseCardCategory() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

	const categoryStyling = {
		fontFamily: 'system-ui',
		fontSize: '1.2rem',
		color: isDarkMode ? '#d6d3d1' : '#000',
		pl: 0.5,
	};

	return (
		<span>
			<Typography sx={categoryStyling}>{expense.category}</Typography>
		</span>
	);
}

export default ExpenseCardCategory;
