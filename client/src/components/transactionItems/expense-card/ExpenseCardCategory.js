import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function ExpenseCardCategory({ expense }) {
	const { isDarkMode } = useDarkMode();

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
