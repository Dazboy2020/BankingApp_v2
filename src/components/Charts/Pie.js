import React from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';

function PieChart({ accountMovements, currency, sort }) {
	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].movements
			: accountMovements[1].expenses;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let bgColor;
	let label;

	bgColor = moves.map((item) => (item[0] > 0 ? 'green' : 'red'));
	label = moves.map((item) => (item[0] > 0 ? `${item[0]}` : `${item[0]}`));

	const userData = {
		labels: label,
		datasets: [
			{
				label: 'Incomes and Expenses',
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
		<div className="canvas" style={{ width: '40rem', margin: 'auto' }}>
			<h1>{currency === 'euro' ? 'Incomes' : 'Expenses'}</h1>
			<Doughnut data={userData} options={options} />
		</div>
	);
}

export default PieChart;
