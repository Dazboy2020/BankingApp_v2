import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

import { useAppContext } from '../../../context/context';

import nodata from '../../../assets/nodata.png';
import PieChartCard from './PieChartCard';
import NoData from './NoData';
import { useDarkMode } from '../../../hooks/useDarkMode';

function PieExpenseVDeposit() {
	const { state } = useAppContext();
	const { isDarkMode } = useDarkMode();
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
				backgroundColor: isDarkMode
					? ['#f97316', '#9A3412']
					: ['#495057', '#d6336c'],
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
		<PieChartCard title="INCOME vs.EXPENSES">
			{state.expenses.length > 0 || state.deposits > 0 ? (
				<Doughnut data={userData} options={options} />
			) : (
				<NoData src={nodata} title="Awaiting Data..." />
			)}
		</PieChartCard>
	);
}

export default PieExpenseVDeposit;
