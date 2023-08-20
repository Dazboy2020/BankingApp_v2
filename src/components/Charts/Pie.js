import React from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';
import { Typography, Box } from '@mui/material';

function PieChart({ accountMovements, currency, sort }) {
	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].deposits
			: accountMovements[1].expenses;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let bgColor = moves.map((item) => (item[0] > 0 ? '#597081' : '#a8577e'));
	let label = moves.map((item) => (item[0] > 0 ? `${item[0]}` : `${item[0]}`));
	let dataSetLabel = currency === 'euro' ? 'Income' : 'Expense';
	let titleText = currency === 'euro' ? 'INCOME' : 'EXPENSES';

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
			// legend: {
			// 	position: 'left',
			// 	rtl: true,
			// 	labels: {
			// 		usePointStyle: true,
			// 		pointStyle: 'circle',
			// 		padding: 20,
			// 		font: {
			// 			size: 16,
			// 			weight: 'bold',
			// 		},
			// 	},
			// },
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				// flexGrow: 1,
			}}
		>
			<Typography
				variant="h6"
				sx={{
					padding: '1rem',
					backgroundColor: '#3a7ca5',
					color: 'white',
				}}
			>
				{currency === 'euro' ? 'INCOME' : 'EXPENSES'}
			</Typography>
			<div
				className="canvas"
				style={{
					// width: '40rem',
					width: '40vh',
					height: 'auto',
					margin: 'auto',
					padding: '1rem',
				}}
			>
				<Doughnut data={userData} options={options} />
			</div>
		</Box>
	);
}

export default PieChart;
