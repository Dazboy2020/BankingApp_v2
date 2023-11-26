import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAppContext } from '../../context/context';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function BarChartExpenses() {
	const { state } = useAppContext();

	const movementsToDisplay = state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b.amount - a.amount)
		: movementsToDisplay;

	let bgColor = moves.map((item) => (item.amount > 0 ? '#597081' : '#a8577e'));
	let label = moves.map((item) => item.amount);
	let dataSetLabel = 'Expenses';
	let titleText = 'EXPENSES';

	const userData = {
		labels: label,
		datasets: [
			{
				label: dataSetLabel,
				data: moves.map((item) => item.amount),
				backgroundColor: bgColor,
			},
		],
	};

	const options = {
		plugins: {
			title: {
				display: true,
				text: titleText,
				font: {
					size: 16,
					weight: 'bold',
				},
			},
		},
	};

	return (
		<Card sx={{ width: '100%' }}>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>
					<Typography
						variant="h5"
						sx={{
							padding: '1rem',
							backgroundColor: '#a8577e',
							color: 'white',
							textAlign: 'center',
						}}
					>
						EXPENSES
					</Typography>
					<div
						className="canvas"
						style={{
							display: 'flex',
							flexGrow: 1,
							justifyContent: 'center',
							width: '100%',
							height: { xs: '100%', s: '100%', sm: '75%' },

							marginLeft: 'auto',
							padding: '1rem',
						}}
					>
						<Bar data={userData} options={options} />
					</div>
				</Box>
			</CardContent>
		</Card>
	);
}

export default BarChartExpenses;