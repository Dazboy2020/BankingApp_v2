import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAppContext } from '../../context/context';

import nodata from '../../assets/nodata.png';
import classes from './pie_wrapper.module.css';

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
		labels: [`Deposits: ${incomeData}`, `Expenses: ${expenseData}`],
		datasets: [
			{
				label: 'Expenses vs Deposits',

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
		<Card sx={{ width: '100%', borderRadius: '10px' }}>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'centre',
				}}
			>
				<Box
					className={classes.animate}
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
							letterSpacing: '.1rem',
							// fontWeight: 'bold',
						}}
					>
						INCOME vs.EXPENSES
					</Typography>
					{state.expenses.length > 0 || state.deposits > 0 ? (
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
					) : (
						<Box>
							<p style={{ textAlign: 'center', padding: '1rem' }}>
								Awaiting Data...
							</p>
							<img
								style={{
									width: '40vh',
									height: '35vh',
									objectFit: '-moz-initial',
								}}
								src={nodata}
								alt="finance"
							/>
						</Box>
					)}
				</Box>
			</CardContent>
		</Card>
	);
}

export default PieEuro;
