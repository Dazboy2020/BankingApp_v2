import ResponsiveDrawer from '../components/drawer/Draw';
import { Box } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import BarChartDeposit from '../components/charts/bar-charts/BarChartDeposit';
import BarChartExpenses from '../components/charts/bar-charts/BarChartExpenses';
import PageLayout from './layout/PageLayout';

function Chart() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			<PageLayout>
				<BarChartDeposit />
				<BarChartExpenses />
			</PageLayout>
		</>
	);
}

export default Chart;
