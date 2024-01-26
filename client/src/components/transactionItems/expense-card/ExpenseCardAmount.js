import { useDarkMode } from '../../../hooks/useDarkMode';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { Box, Typography } from '@mui/material';

function ExpenseCardAmount() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

	const amountStyling = {
		fontSize: '1.2rem',
		ml: 'auto',
		fontWeight: 'bold',
		color: isDarkMode ? '#d6d3d1' : '#000',
		pl: 0.5,
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
			}}
		>
			<span>
				<Typography sx={amountStyling}>€{expense.amount}</Typography>
			</span>
		</Box>
	);
}

export default ExpenseCardAmount;
