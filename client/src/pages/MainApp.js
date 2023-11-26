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
import { useDarkMode } from '../hooks/useDarkMode';

const movementList = {
	display: 'flex',
	flexGrow: 1,
	width: '100%',
};

const chartStyle = {
	display: 'flex',
	alignItems: 'centre',
	justifyContent: 'space-around',
	paddingTop: '1rem',
	// backgroundColor: '##f3e5f5',
	mb: 2,
	ml: 4,
	mr: 4,
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
				sx={{
					minHeight: '100vh',

					ml: { lg: '18.8rem', md: '18rem', sm: '16rem', s: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
					backgroundColor: '#343a40',
				}}
			>
				<Box
					sx={{
						margin: { xs: { ml: 0, mr: 0, mt: 2, mb: 2 }, md: '1rem' },
					}}
				>
					<Stack
						component="section"
						spacing={3}
						direction={{ sm: 'column', md: 'row' }}
						sx={{
							justifyContent: 'space-between',
							ml: 4,
							mr: 4,

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
						<Box component="section" sx={movementList}>
							<DepositItems />
						</Box>
						<Box component="section" sx={movementList}>
							<ExpenseItems />
						</Box>
					</MovementList>
				</Box>
			</Box>
		</>
	);
}

export default MainApp;
