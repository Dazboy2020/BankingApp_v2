import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box } from '@mui/material';
import classes from '../Movements.module.css';
import SouthEastIcon from '@mui/icons-material/SouthEast';

function ExpenseCardTitle() {
	const { isDarkMode } = useDarkMode();

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<span
				className={
					isDarkMode ? classes.movements__type__dark : classes.movements__type
				}
			>
				Expense
			</span>
			<SouthEastIcon sx={{ fontSize: '40px', color: 'red' }} />
		</Box>
	);
}

export default ExpenseCardTitle;
