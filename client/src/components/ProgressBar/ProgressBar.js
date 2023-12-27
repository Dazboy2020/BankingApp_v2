import { Box } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import { useAppContext } from '../../context/context';

function ProgressBarComponent() {
	let budget = 2000;
	const { totalExpenses } = useAppContext();

	let progress = Number(Math.abs((+totalExpenses / +budget) * 100).toFixed(0));

	return (
		<Box sx={{ mt: 2 }}>
			<ProgressBar
				completed={+progress}
				bgColor="#343a40"
				labelSize="20px"
				labelColor="#fff"
				height="30px"
				borderRadius="5px"
			/>
		</Box>
	);
}

export default ProgressBarComponent;
