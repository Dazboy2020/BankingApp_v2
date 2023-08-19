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
				backgroundColor: ['green', 'red'],
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
			maintainAspectRatio: false,
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
				Income Vs. Expenses
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
				Income Vs. Expenses
			</Typography> */}
				<Doughnut data={userData} options={options} />
			</div>
		</>
	);
}

export default PieEuro;
