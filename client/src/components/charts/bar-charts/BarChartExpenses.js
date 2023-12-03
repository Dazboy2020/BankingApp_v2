import { useAppContext } from '../../../context/context';
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
import { groupArrayByDate } from '../../../utils/sortArray';
import BarChartCard from './BarChartCard';
import { useDarkMode } from '../../../hooks/useDarkMode';

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
	const { isDarkMode } = useDarkMode();

	const moves = state.expenses;
	let sortedMoves = [];

	sortedMoves = groupArrayByDate(moves);

	let bgColor = isDarkMode ? '#212529' : '#495057';
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
				color: 'white',
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
		<BarChartCard options={options} userData={userData} title="EXPENSES">
			<Line data={userData} options={options} />
		</BarChartCard>
	);
}

export default BarChartExpenses;
