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

	let bgColor = moves.map((item) => (item.amount > 0 ? '#597081' : '#d6336c'));
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
