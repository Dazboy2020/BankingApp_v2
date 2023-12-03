import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';

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

	let bgColor = isDarkMode ? '#212529' : '#495057';
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
		<BarChartCard options={options} userData={userData} title="DEPOSITS">
			<Bar data={userData} options={options} />
		</BarChartCard>
	);
}

export default BarChart;
