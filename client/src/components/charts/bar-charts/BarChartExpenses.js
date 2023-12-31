import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';
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
import { Bar } from 'react-chartjs-2';
import { groupArrayByDate } from '../../../utils/sortArray';
import BarChartCard from './BarChartCard';
// import { useEffect } from 'react';

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

	let bgColor = isDarkMode
		? ['#7C2D12', '#9A3412', '#B45309', '#D97706', '#f97316']
		: ['#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937'];

	let label = sortedMoves.map((item) => item.date);

	let dataSetLabel = 'Expenses';
	let titleText = 'EXPENSES';

	const userData = {
		labels: label,
		datasets: [
			{
				label: dataSetLabel,
				data: sortedMoves.map((item) => Math.abs(item.totalAmount)),
				backgroundColor: bgColor,
				maxBarThickness: 100,
				borderRadius: 10,
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
		<BarChartCard title="EXPENSES">
			<Bar id="myChart" data={userData} options={options} />
		</BarChartCard>
	);
}

export default BarChartExpenses;
