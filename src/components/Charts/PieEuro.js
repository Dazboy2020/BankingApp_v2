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
	const balanceEUR = accountMovements[0].movements.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const balanceUSD = accountMovements[1]?.movementsUSD.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const userData = {
		labels: ['EUR', 'USD'],
		datasets: [
			{
				label: 'Euro vs USD',
				data: [balanceEUR, balanceUSD],
				backgroundColor: ['orange', 'orangered'],
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

	// return <PieEuro data={userData} />;
	return (
		<div className="canvas" style={{ width: '40rem', margin: 'auto' }}>
			<h1
				className="title"
				// style={{ textAlign: 'center' }}
			>
				Euro Vs. USD
			</h1>
			<Doughnut data={userData} options={options} />
		</div>
	);
}

export default PieEuro;
