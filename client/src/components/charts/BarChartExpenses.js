import { useAppContext } from '../../context/context';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	// BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Typography, Card, CardContent } from '@mui/material';
import { groupArrayByDate } from '../../utils/sortArray';
import { useTheme } from '@mui/material/styles';

ChartJS.register(
	// BarElement,

	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function BarChartExpenses() {
	const { state } = useAppContext();
	const theme = useTheme();

	const moves = state.expenses;
	let sortedMoves = [];

	sortedMoves = groupArrayByDate(moves);

	let bgColor = '#a8577e';
	let label = sortedMoves.map((item) => item.date);

	let dataSetLabel = 'Expenses';
	let titleText = 'EXPENSES';

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
					// Adjust height for mobile devices using theme breakpoints
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
						backgroundColor: '#a8577e',
						color: 'white',
						textAlign: 'center',
					}}
				>
					EXPENSES
				</Typography>
				<div
					className="canvas"
					style={{
						display: 'flex',
						flexGrow: 1,
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						padding: '1rem',
					}}
				>
					<Line data={userData} options={options} />
				</div>
			</CardContent>
		</Card>
	);
}

export default BarChartExpenses;
