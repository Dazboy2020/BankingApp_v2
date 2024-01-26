import { Typography } from '@mui/material';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';

function ExpenseCardDate() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

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
			<Typography sx={dateStyling}>{expense.date}</Typography>
		</span>
	);
}

export default ExpenseCardDate;
