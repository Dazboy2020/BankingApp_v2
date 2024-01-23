import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function DepositCardDate({ deposit }) {
	const { isDarkMode } = useDarkMode();

	return (
		<span
			className={
				isDarkMode ? classes.movements__date__dark : classes.movements__date
			}
		>
			{deposit.date}
		</span>
	);
}

export default DepositCardDate;
