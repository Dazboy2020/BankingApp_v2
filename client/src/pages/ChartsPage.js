import BarChartDeposit from '../components/charts/bar-charts/BarChartDeposit';
import BarChartExpenses from '../components/charts/bar-charts/BarChartExpenses';
import PageLayout from './layout/PageLayout';
import FramerWrapper from './page-animations/FramerWrapper';

function Chart() {
	return (
		<PageLayout>
			<FramerWrapper>
				<BarChartDeposit />
				<BarChartExpenses />
			</FramerWrapper>
		</PageLayout>
	);
}

export default Chart;
