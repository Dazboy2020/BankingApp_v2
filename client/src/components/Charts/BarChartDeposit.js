import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAppContext } from '../../context/context';

function BarChart() {
	const { state } = useAppContext();

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay =
		state.currency === 'euro' ? state.deposits : state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let bgColor = moves.map((item) => (item[0] > 0 ? '#597081' : '#a8577e'));
	let label = moves.map((item) => item[0]);
	let dataSetLabel = state.currency === 'euro' ? 'Income' : 'Expense';
	let titleText = state.currency === 'euro' ? 'INCOME' : 'EXPENSES';

	const userData = {
		labels: label,
		datasets: [
			{
				label: dataSetLabel,
				data: moves.map((item) => item[0]),
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
							backgroundColor: '#3a7ca5',
							color: 'white',
							textAlign: 'center',
						}}
					>
						{state.currency === 'euro' ? 'INCOME' : 'EXPENSES'}
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
