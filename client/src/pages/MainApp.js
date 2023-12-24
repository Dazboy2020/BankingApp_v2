import { useDarkMode } from '../hooks/useDarkMode';
import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';

import MovementList from '../components/movements/MovementList';

import ExpenseSummary from '../components/outline-Card/ExpenseSummary';

import { Box } from '@mui/material';

import classes from './MainApp.module.css';
import ResponsiveDrawer from '../components/drawer/Draw';
import Income from '../components/outline-Card/Income';
import AvailbleFunds from '../components/outline-Card/AvailableFunds';
import ExpenseItems from '../components/movements/ExpenseItems';
import DepositItems from '../components/movements/DepositItems';
import PieExpenses from '../components/charts/pie-charts/PieExpenses';
import PieExpenseVDeposit from '../components/charts/pie-charts/PieExpenseVDeposit';
import CombinedItems from '../components/movements/CombinedItems';

const rootWindowLayout = {
	minHeight: '100vh',
	ml: { lg: '22rem', md: '22rem', sm: '19rem', xs: 0 },
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
						<PieExpenses />
						<PieExpenseVDeposit />
					</Stack>
					{/* //!Movements */}
					<MovementList>
						{/* <ExpenseItems />
						<DepositItems /> */}
						<CombinedItems />
					</MovementList>
				</Box>
			</Box>
		</>
	);
}

export default MainApp;
