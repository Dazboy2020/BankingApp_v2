import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAppContext } from '../../context/context';

function PieEuro() {
	const { state } = useAppContext();
	const totalIncome = state.deposits?.reduce((acc, mov) => acc + mov.amount, 0);
	const totalExpenses = state.expenses?.reduce(
		(acc, mov) => acc + mov.amount,
		0
	);

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	let incomeData = `${totalIncome.toFixed(2)}`;
	let expenseData = `${Math.abs(totalExpenses).toFixed(2)}`;

	const userData = {
		labels: [incomeData, expenseData],
		datasets: [
			{
				label: ' Total Income vs Expenses',

				data: [totalIncome, totalExpenses],
				backgroundColor: ['#495057', '#d6336c'],
			},
		],
	};

	const options = {
		plugins: {
			title: {
				display: false,
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
		<Card sx={{ width: '100%' }}>
			<CardContent>
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
							// fontWeight: 'bold',
						}}
					>
						INCOME vs.EXPENSES
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

export default PieEuro;
