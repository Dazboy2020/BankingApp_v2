import { useDarkMode } from '../hooks/useDarkMode';
import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';

import MovementList from '../components/movements/MovementList';

import ExpenseSummary from '../components/outline-Card/ExpenseSummary';

import PieChart from '../components/charts/Pie';
import PieEuro from '../components/charts/PieEuro';

import { Box } from '@mui/material';

import classes from './MainApp.module.css';
import ResponsiveDrawer from '../components/drawer/Draw';
import Income from '../components/outline-Card/Income';
import AvailbleFunds from '../components/outline-Card/AvailableFunds';
import ExpenseItems from '../components/movements/ExpenseItems';
import DepositItems from '../components/movements/DepositItems';

const rootWindowLayout = {
	minHeight: '100vh',
	ml: { lg: '19rem', md: '19rem', sm: '16.5rem', s: 0 },
	mr: { lg: 0, sm: 0, m: 0 },
	backgroundColor: '#343a40',
};

const chartStyle = {
	display: 'flex',
	alignItems: 'centre',
	justifyContent: 'space-around',
	mb: 2,
	mt: 3,
};

function MainApp() {
	const { isDarkMode } = useDarkMode();
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			<CloseAccountModal />
			<Toast />
			<Box
				component="main"
				className={isDarkMode ? classes.darkmode : classes.body}
				sx={rootWindowLayout}
			>
				<Box
					sx={{
						ml: { xs: 3, sm: 6 },
						mr: { xs: 3, sm: 6 },
						mt: 4,
					}}
				>
					{/* //! Summary Cards */}
					<Stack
						component="section"
						spacing={3}
						direction={{ sm: 'column', md: 'row' }}
						sx={{
							justifyContent: 'space-between',
							mt: { xs: 5, md: 10 },
						}}
					>
						<Income />
						<ExpenseSummary />
						<AvailbleFunds />
					</Stack>

					{/* //! Charts */}
					<Stack
						component="section"
						spacing={4}
						direction={{ s: 'column', md: 'column', lg: 'row' }}
						sx={chartStyle}
					>
						<PieChart />
						<PieEuro />
					</Stack>
					{/* //!Movements */}
					<MovementList>
						<ExpenseItems />
						<DepositItems />
					</MovementList>
				</Box>
			</Box>
		</>
	);
}

export default MainApp;
