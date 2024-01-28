import { useDarkMode } from '../../../hooks/useDarkMode';
import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { Box, Typography } from '@mui/material';
import { amountStyling } from '../cardStyling';

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
			<span>
				<Typography sx={amountStyling(isDarkMode)}>
					€{expense.amount}
				</Typography>
			</span>
		</Box>
	);
}

export default ExpenseCardAmount;
