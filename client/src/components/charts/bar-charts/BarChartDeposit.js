import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';
import nodata from '../../../assets/nodata.png';

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
import { groupArrayByDate } from '../../../utils/sortArray';
import BarChartCard from './BarChartCard';
import NoData from '../pie-charts/NoData';

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
	const { isDarkMode } = useDarkMode();

	const moves = state.deposits;
	let sortedMoves = [];

	sortedMoves = groupArrayByDate(moves);

	let bgColor = isDarkMode
		? ['#7C2D12', '#9A3412', '#B45309', '#D97706', '#f97316']
		: ['#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937'];
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
		<BarChartCard title="DEPOSITS">
			{state.deposits.length > 0 ? (
				<Bar id="canvas" data={userData} options={options} />
			) : (
				<NoData src={nodata} title="No Deposits Found.." />
			)}
		</BarChartCard>
	);
}

export default BarChart;
