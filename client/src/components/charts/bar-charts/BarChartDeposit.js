import { useAppContext } from '../../../context/context';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Typography, Card, CardContent } from '@mui/material';
import { groupArrayByDate } from '../../../utils/sortArray';
import { useTheme } from '@mui/material/styles';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
function BarChart() {
	const { state } = useAppContext();
	const theme = useTheme();

	const moves = state.deposits;
	let sortedMoves = [];

	sortedMoves = groupArrayByDate(moves);

	let bgColor = '#597081';
	let label = sortedMoves.map((item) => item.date);
	let dataSetLabel = 'Income';
	let titleText = 'INCOME';

	const userData = {
		labels: label,
		datasets: [
			{
				label: dataSetLabel,
				data: sortedMoves.map((item) => item.totalAmount),
				backgroundColor: bgColor,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,

		plugins: {
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

	return (
		<Card
			sx={{
				width: '100%',
				mb: 3,
				[theme.breakpoints.down('sm')]: {
					height: '100vh', // 75% of viewport height for small devices
				},
			}}
		>
			<CardContent
				sx={{
					[theme.breakpoints.down('sm')]: {
						height: '100vh',
					},
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					margin: 'auto',
					height: '80vh',
					width: 'auto',
				}}
			>
				<Typography
					variant="h5"
					sx={{
						padding: '1rem',
						backgroundColor: '#3a7ca5',
						color: 'white',
						textAlign: 'center',
					}}
				>
					INCOME
				</Typography>
				<div
					className="canvas"
					style={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						padding: '1rem',
					}}
				>
					<Bar data={userData} options={options} />
				</div>
			</CardContent>
		</Card>
	);
}

export default BarChart;
