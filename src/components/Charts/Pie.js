import React from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Bar, Pie } from 'react-chartjs-2';

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

	bgColor = moves.map((item) => (item[0] > 0 ? 'green' : 'red'));

	const userData = {
		labels: moves.map((item) => (item[0] > 0 ? 'Deposit' : 'Withdrawal')),
		datasets: [
			{
				type: 'pie',
				label: 'Deposits vs Withdrawals',
				data: moves.map((item) => item[0]),
				backgroundColor: bgColor,
			},
			// {
			// 	options: {
			// 		responsive: false,
			// 		plugins: {
			// 			legend: {
			// 				position: 'bottom',
			// 			},
			// 			title: {
			// 				display: true,
			// 				text: 'Chart.js Pie Chart',
			// 			},
			// 		},
			// 	},
			// },
		],
	};

	// return <PieChart data={userData} />;
	return (
		<div style={{ width: '700px', margin: 'auto' }}>
			<h1 style={{ textAlign: 'center' }}>Deposits Vs. Withdrawals</h1>
			<Pie data={userData} />
		</div>
	);
}

export default PieChart;
