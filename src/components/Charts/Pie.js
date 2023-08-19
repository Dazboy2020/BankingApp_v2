import React from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';
import { Typography } from '@mui/material';

function PieChart({ accountMovements, currency, sort }) {
	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].deposits
			: accountMovements[1].expenses;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let bgColor = moves.map((item) => (item[0] > 0 ? 'green' : 'red'));
	let label = moves.map((item) => (item[0] > 0 ? `${item[0]}` : `${item[0]}`));
	let dataSetLabel = currency === 'euro' ? 'Income' : 'Expense';

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
			legend: {
				position: 'left',
				rtl: true,
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					padding: 20,
					font: {
						size: 16,
						weight: 'bold',
					},
				},
			},
		},
	};

	return (
		<>
			<Typography
				variant="h5"
				sx={{
					// maxWidth: '100%',
					padding: '1rem',
					backgroundColor: 'indianred',
				}}
			>
				{currency === 'euro' ? 'Income' : 'Expenses'}
			</Typography>
			<div
				className="canvas"
				style={{
					width: '50rem',
					margin: 'auto',
					padding: '1rem',
				}}
			>
				{/* <Typography
				variant="h5"
				sx={{
					maxWidth: '100%',
					padding: '1rem',
					backgroundColor: 'indianred',
				}}
			>
				{currency === 'euro' ? 'Income' : 'Expenses'}
			</Typography> */}
				<Doughnut data={userData} options={options} />
			</div>
		</>
	);
}

export default PieChart;
