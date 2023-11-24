import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import { useAppContext } from '../../context/context';

import ChartCard from './ChartCard';
import NoData from './NoData';
import nodata from '../../assets/nodata.png';

function PieChart() {
	const { state } = useAppContext();

	ChartJS.register(ArcElement, Legend, Tooltip, Title);

	const moves = state.expenses;

	let bgColor = ['#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937'];
	let label = moves.map((item) => item.category);
	let dataSetLabel = 'Expense';
	let titleText = 'EXPENSES';

	const userData = {
		labels: label,
		datasets: [
			{
				label: dataSetLabel,
				data: moves.map((item) => item.amount),
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
		<ChartCard>
			{state.expenses.length > 0 || state.deposits > 0 ? (
				<Doughnut data={userData} options={options} />
			) : (
				<NoData src={nodata} title="No Expenses Found.." />
			)}
		</ChartCard>
	);
}

export default PieChart;
