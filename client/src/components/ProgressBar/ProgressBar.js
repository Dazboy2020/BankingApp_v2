import { Box } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import { useAppContext } from '../../context/context';
import { useDarkMode } from '../../hooks/useDarkMode';
import {
	filterExpensesForCurrentMonth,
	sumExpenses,
} from '../../utils/BudgetHelper';

function ProgressBarComponent() {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();

	const color = isDarkMode ? '#fff' : '#000';
	const barColor = isDarkMode ? '#f97316' : '#343a40';

	if (state.budget === null) return;

	const currentMonthExpenses = filterExpensesForCurrentMonth(state.expenses);

	const calculateBudgetSpent = (expenses, budget) => {
		const totalExpenses = sumExpenses(expenses);
		return (totalExpenses / budget) * 100;
	};

	const percentSpent = Math.abs(
		calculateBudgetSpent(currentMonthExpenses, state.budget)
	).toFixed(0);

	return (
		<Box sx={{ mt: 2, ml: 0 }}>
			<ProgressBar
				completed={+percentSpent}
				bgColor={barColor}
				labelSize="20px"
				labelColor={color}
				height="30px"
				borderRadius="5px"
				labelAlignment="outside"
			/>
		</Box>
	);
}

export default ProgressBarComponent;
