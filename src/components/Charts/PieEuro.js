import React from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';

function PieEuro({ accountMovements, currency, sort }) {
	const totalIncome = accountMovements[0].movements.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const totalExpenses = accountMovements[1]?.expenses.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const userData = {
		labels: ['Income', 'Expenses'],
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
				position: 'right',
				rtl: true,
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					padding: 20,
				},
			},
			maintainAspectRatio: false,
		},
	};

	return (
		<div className="canvas" style={{ width: '40rem', margin: 'auto' }}>
			<h1
				className="title"
				// style={{ textAlign: 'center' }}
			>
				Income Vs. Expenses
			</h1>
			<Doughnut data={userData} options={options} />
		</div>
	);
}

export default PieEuro;
