import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import { useAppContext } from '../../../context/context';

import PieChartCard from './PieChartCard';
import NoData from './NoData';
import nodata from '../../../assets/nodata.png';
import { groupArrayByCategory } from '../../../utils/sortArray';
import { useDarkMode } from '../../../hooks/useDarkMode';

// let bgColor = ['#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937'];

function PieExpenses() {
	const { state } = useAppContext();
	const { isDarkMode } = useDarkMode();

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const moves = state.expenses;
	let sortedMoves = [];

	sortedMoves = groupArrayByCategory(moves);

	let bgColor = isDarkMode
		? ['#7C2D12', '#9A3412', '#B45309', '#D97706', '#f97316']
		: ['#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937'];
	let label = sortedMoves.map((item) => item.category);
	let dataSetLabel = 'Expense';
	let titleText = 'EXPENSES';

	console.log(sortedMoves);

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
		plugins: {
			title: {
				display: false,
				text: titleText,
				font: {
					size: 16,
					weight: 'bold',
				},
			},
		},
	};

	return (
		<PieChartCard>
			{state.expenses.length > 0 || state.deposits > 0 ? (
				<Doughnut data={userData} options={options} />
			) : (
				<NoData src={nodata} title="No Expenses Found.." />
			)}
		</PieChartCard>
	);
}

export default PieExpenses;
