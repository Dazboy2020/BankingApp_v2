import ResponsiveDrawer from '../components/drawer/Draw';
import { Box } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import BarChartDeposit from '../components/charts/BarChartDeposit';
import BarChartExpenses from '../components/charts/BarChartExpenses';
import classes from './MainApp.module.css';
import { useDarkMode } from '../hooks/useDarkMode';

function Chart() {
	const { isDarkMode } = useDarkMode();
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			<Box className={isDarkMode ? classes.darkmode : classes.body}>
				<Box
					sx={{
						minHeight: '100vh',
						ml: { lg: '22rem', md: '22rem', sm: '19rem', xs: 0 },
						mr: { lg: 0, sm: 0, m: 0 },
						mt: { xs: 1, sm: 8 },
					}}
				>
					<Box
						sx={{
							ml: { xs: 4, s: 10 },
							mr: { xs: 3, s: 10 },
							mt: 3,
						}}
					>
						<BarChartDeposit />
						<BarChartExpenses />
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Chart;
