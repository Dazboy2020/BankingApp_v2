import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../layout/Movements.module.css';

function ExpenseCardDate() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();
	return (
		<span
			className={
				isDarkMode ? classes.movements__date__dark : classes.movements__date
			}
		>
			{expense.date}
		</span>
	);
}

export default ExpenseCardDate;
