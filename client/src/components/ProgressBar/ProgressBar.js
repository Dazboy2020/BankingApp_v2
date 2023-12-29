import { Box } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import { useAppContext } from '../../context/context';
import { useDarkMode } from '../../hooks/useDarkMode';

function ProgressBarComponent() {
	const { isDarkMode } = useDarkMode();
	let budget = 2000;
	const { totalExpenses } = useAppContext();

	const color = isDarkMode ? '#fff' : '#000';
	const barColor = isDarkMode ? '#f97316' : '#343a40';

	let progress = Number(Math.abs((+totalExpenses / +budget) * 100).toFixed(0));

	return (
		<Box sx={{ mt: 2, ml: 0 }}>
			<ProgressBar
				completed={+progress}
				bgColor={barColor}
				labelSize="20px"
				labelColor={color}
				height="30px"
				borderRadius="5px"
				labelAlignment="outside"
			/>
		</Box>
	);
}

export default ProgressBarComponent;
