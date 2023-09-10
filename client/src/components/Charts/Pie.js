import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAppContext } from '../../context/context';

function PieChart() {
	const { state } = useAppContext();

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay = state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let bgColor = moves.map((item) => (item.amount > 0 ? '#597081' : '#a8577e'));
	let label = moves.map((item) => item.amount);
	let dataSetLabel = 'Expense';
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
						sx={{
							fontSize: { xs: '1rem', md: '1.3rem' },
							padding: { xs: '.8rem', md: '1rem' },
							backgroundColor: '#3a7ca5',
							color: 'white',
							textAlign: 'center',
							fontWeight: 'bold',
						}}
					>
						EXPENSES
					</Typography>
					<div
						className="canvas"
						style={{
							// width: '40rem',
							width: '40vh',
							height: '40vh',

							margin: 'auto',
							padding: '1rem',
						}}
					>
						<Doughnut data={userData} options={options} />
					</div>
				</Box>
			</CardContent>
		</Card>
	);
}

export default PieChart;
