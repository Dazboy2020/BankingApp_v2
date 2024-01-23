import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function ExpenseCardDate({ expense }) {
	const { isDarkMode } = useDarkMode();
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
