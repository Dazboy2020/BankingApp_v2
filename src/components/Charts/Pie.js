import React from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Bar, Pie, Doughnut } from 'react-chartjs-2';

function PieChart({ accountMovements, currency, sort }) {
	// const balanceEUR = accountMovements[0].movements.reduce(
	// 	(acc, mov) => acc + mov[0],
	// 	0
	// );
	// const balanceUSD = accountMovements[1]?.movementsUSD.reduce(
	// 	(acc, mov) => acc + mov[0],
	// 	0
	// );

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].movements
			: accountMovements[1].movementsUSD;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let bgColor;
	let label;

	bgColor = moves.map((item) => (item[0] > 0 ? 'green' : 'red'));
	label = moves.map((item) => (item[0] > 0 ? 'deposit' : 'Withdrawal'));

	const userData = {
		labels: label,
		datasets: [
			{
				label: 'Deposits vs Withdrawals',
				data: moves.map((item) => item[0]),
				backgroundColor: bgColor,
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
		},
	};

	// return <PieChart data={userData} />;
	return (
		<div className="canvas" style={{ width: '40rem', margin: 'auto' }}>
			<h1
				className="title"
				// style={{ textAlign: 'center' }}
			>
				Deposits Vs. Withdrawals
			</h1>
			<Doughnut data={userData} options={options} />
		</div>
	);
}

export default PieChart;
