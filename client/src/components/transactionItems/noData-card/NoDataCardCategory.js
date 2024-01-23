import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';
import classes from '../Movements.module.css';

function NoDataCardCategory({ type }) {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();

	return (
		<span
			className={
				isDarkMode
					? classes.movements__category__dark
					: classes.movements__category
			}
		>
			{state.isActive === 4
				? 'Once you set a monthly budget, financial data for the current month only will be displayed here.'
				: `Please add your first ${type} `}
		</span>
	);
}

export default NoDataCardCategory;
