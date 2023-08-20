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

function PieEuro({ accountMovements, currency, sort }) {
	const totalIncome = accountMovements[0].deposits.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const totalExpenses = accountMovements[1]?.expenses.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	let incomeData = `${totalIncome.toFixed(2)}`;
	let expenseData = `${Math.abs(totalExpenses).toFixed(2)}`;

	const userData = {
		labels: [incomeData, expenseData],
		datasets: [
			{
				label: 'Income vs Expenses',
				data: [totalIncome, totalExpenses],
				backgroundColor: ['#597081', '#a8577e'],
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
				text: 'Income vs. Expenses',
				font: {
					size: 16,
					weight: 'bold',
				},
			},

			maintainAspectRatio: false,
		},
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography
				variant="h6"
				sx={{
					// maxWidth: '100%',
					padding: '1rem',
					backgroundColor: '#3a7ca5',
					color: 'white',
				}}
			>
				INCOME vs.EXPENSES
			</Typography>
			<div
				className="canvas"
				style={{
					width: '100%',
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

export default PieEuro;
