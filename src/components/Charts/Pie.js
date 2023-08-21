import React, { useState } from 'react';
// import RedoIcon from '@mui/icons-material/Redo';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
	Chart as ChartJS,
	ArcElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';
import { Typography, Box } from '@mui/material';

function PieChart({ accountMovements, currency, sort, setSort }) {
	const [category, setCategory] = useState(false);

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const movementsToDisplay =
		currency === 'euro'
			? accountMovements[0].deposits
			: accountMovements[1].expenses;

	const moves = sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	let chartLabel;
	// label as category:
	let labelCategory = moves.map((item) =>
		item[0] > 0 ? `${item[0]}` : `${item[2]}`
	);

	let bgColor = moves.map((item) => (item[0] > 0 ? '#597081' : '#a8577e'));
	let label = moves.map((item) => item[0]);
	let dataSetLabel = currency === 'euro' ? 'Income' : 'Expense';
	let titleText = currency === 'euro' ? 'INCOME' : 'EXPENSES';
	chartLabel = category ? label : labelCategory;

	const userData = {
		labels: chartLabel,
		datasets: [
			{
				label: dataSetLabel,
				data: moves.map((item) => item[0]),
				// label: dataSetLabel,

				// data: moves.map((item) => item[0]),
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

	// function handleSort() {
	// 	setSort((sort) => !sort);
	// }

	// function handleCategory() {
	// 	setCategory((category) => !category);
	// }

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
					textAlign: 'center',
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
			{/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
				<Button
					variant="contained"
					onClick={handleSort}
					sx={{
						'&:hover': {
							backgroundColor: '#680747',
							cursor: 'default',
						},
						bgcolor: '#f70776',
						color: 'white',
						mt: 2,
						minWidth: '9rem',
						margin: '.5rem',
						padding: 1,
					}}
					size="s"
					color="inherit"
					startIcon={<RedoIcon />}
				>
					Sort
				</Button>
				<Button
					onClick={handleCategory}
					variant="contained"
					sx={{
						'&:hover': {
							backgroundColor: '#680747',
							cursor: 'default',
						},
						bgcolor: '#f70776',
						color: 'white',
						mt: 2,
						minWidth: '9rem',
						margin: '.5rem',
						padding: 1,
					}}
					size="s"
					color="inherit"
					startIcon={<ShoppingCartIcon />}
				>
					{category ? 'CATEGORY' : 'AMOUNT'}
				</Button>
			</Box> */}
		</Box>
	);
}

export default PieChart;
