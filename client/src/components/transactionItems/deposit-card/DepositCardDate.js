import { useDepositCardContext } from '../../../context/depositCardContext';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../layout/Movements.module.css';

function DepositCardDate() {
	const { isDarkMode } = useDarkMode();
	const { deposit } = useDepositCardContext();

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
