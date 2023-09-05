import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import BarChartDeposit from '../components/Charts/BarChartDeposit';
import BarChartExpenses from '../components/Charts/BarChartExpenses';

function Chart() {
	return (
		<Box sx={{ backgroundColor: '#ececec', height: '100%' }}>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Box
				sx={{
					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
					height: '100vh',
				}}
			>
				<BarChartDeposit />
				<BarChartExpenses />
			</Box>
		</Box>
	);
}

export default Chart;
