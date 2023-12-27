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
				<Box
					sx={{
						ml: { xs: 3, sm: 6 },
						mr: { xs: 3, sm: 6 },
						mt: { xs: 5, sm: 10 },
					}}
				>
					<BarChartDeposit />
					<BarChartExpenses />
				</Box>
			</PageLayout>
		</>
	);
}

export default Chart;
