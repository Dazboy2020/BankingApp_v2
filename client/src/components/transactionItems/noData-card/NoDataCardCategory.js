import { Typography } from '@mui/material';
import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';

function NoDataCardCategory({ type }) {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();

	return (
		<span>
			<Typography
				sx={{
					color: isDarkMode ? '#d6d3d1' : '#000',
				}}
			>
				{state.isActive === 4
					? 'Once you set a monthly budget, financial data for the current month only will be displayed here.'
					: `Please add your first ${type} `}
			</Typography>
		</span>
	);
}

export default NoDataCardCategory;
