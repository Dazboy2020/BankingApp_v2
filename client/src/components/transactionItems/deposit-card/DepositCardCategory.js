import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function DepositCardCategory({ deposit }) {
	const { isDarkMode } = useDarkMode();

	return (
		<span
			className={
				isDarkMode
					? classes.movements__category__dark
					: classes.movements__category
			}
		>
			{deposit.category}
		</span>
	);
}

export default DepositCardCategory;
