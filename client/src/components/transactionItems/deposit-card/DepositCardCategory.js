import { useDepositCardContext } from '../../../context/depositCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function DepositCardCategory() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

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
