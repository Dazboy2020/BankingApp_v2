import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box } from '@mui/material';
import classes from '../layout/Movements.module.css';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';

function NoDataCardTitle({ type }) {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();

	const styling = {
		display: 'flex',
		justifyContent: 'space-between',
		mb: 3,
		flexGrow: 1,
	};
	return (
		<Box sx={styling}>
			<span
				className={
					isDarkMode ? classes.movements__type__dark : classes.movements__type
				}
			>
				{state.isActive === 4 ? 'Awaiting Data' : type}
			</span>
			<ErrorOutlineTwoToneIcon sx={{ fontSize: '40px', color: 'red' }} />
		</Box>
	);
}

export default NoDataCardTitle;
