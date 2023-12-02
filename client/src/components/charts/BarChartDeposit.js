import { useAppContext } from '../../context/context';
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
import { groupArrayByDate } from '../../utils/sortArray';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
function BarChart() {
	const { state } = useAppContext();

	const moves = state.deposits;
	let sortedMoves = [];

	sortedMoves = groupArrayByDate(moves);

	let bgColor = '#597081';
	let label = sortedMoves.map((item) => item.date);
	let dataSetLabel = 'Income';
	let titleText = 'INCOME';

	const userData = {
		labels: label,
		datasets: [
			{
				label: dataSetLabel,
				data: sortedMoves.map((item) => item.totalAmount),
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
		<Card sx={{ width: '100%', mb: 3 }}>
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
							backgroundColor: '#3a7ca5',
							color: 'white',
							textAlign: 'center',
						}}
					>
						INCOME
					</Typography>
					<div
						className="canvas"
						style={{
							// width: '40rem',
							display: 'flex',
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

export default BarChart;
