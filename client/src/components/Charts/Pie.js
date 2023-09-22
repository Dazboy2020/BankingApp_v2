import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAppContext } from '../../context/context';

function PieChart() {
	const { state } = useAppContext();

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const moves = state.expenses;

	// const moves = state.sort
	// 	? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
	// 	: movementsToDisplay;

	let bgColor = ['#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937'];
	let label = moves.map((item) => item.category);
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
				display: false,
				text: titleText,
				font: {
					size: 16,
					weight: 'bold',
				},
			},
		},
	};

	return (
		<Card sx={{ width: '100%', borderRadius: '10px', mb: 3 }}>
			<CardContent
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'centre' }}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: '1rem', md: '1.5rem' },
							padding: { xs: '.8rem', md: '.5rem' },
							backgroundColor: '#495057',
							color: 'white',
							textAlign: 'center',
							letterSpacing: '.1rem',
							// fontWeight: 500,
						}}
					>
						EXPENSES
					</Typography>
					<div
						className="canvas"
						style={{
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
