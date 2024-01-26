import { useExpenseCardContext } from '../../../context/expenseCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../layout/Movements.module.css';

function ExpenseCardCategory() {
	const { isDarkMode } = useDarkMode();
	const { expense } = useExpenseCardContext();

	return (
		<span
			className={
				isDarkMode
					? classes.movements__category__dark
					: classes.movements__category
			}
		>
			{expense.category}
		</span>
	);
}

export default ExpenseCardCategory;
