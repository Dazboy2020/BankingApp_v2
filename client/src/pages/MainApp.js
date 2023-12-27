import { useAppContext } from '../context/context';
import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';
import MovementList from '../components/movements/MovementList';
import ExpenseSummary from '../components/outline-Card/ExpenseSummary';
import { Box } from '@mui/material';
import ResponsiveDrawer from '../components/drawer/Draw';
import Income from '../components/outline-Card/Income';
import AvailbleFunds from '../components/outline-Card/AvailableFunds';
import PieExpenses from '../components/charts/pie-charts/PieExpenses';
import PieExpenseVDeposit from '../components/charts/pie-charts/PieExpenseVDeposit';
import CombinedItems from '../components/movements/CombinedItems';
import FilterItems from '../components/filter/Filter';
import PageLayout from './layout/PageLayout';
// import ExpenseItems from '../components/movements/ExpenseItems';
// import DepositItems from '../components/movements/DepositItems';

const chartStyle = {
	display: 'flex',
	alignItems: 'centre',
	justifyContent: 'space-around',
	mb: { xs: 2, sm: 5, md: 8 },
	mt: { xs: 2, sm: 5, md: 8 },
};

function MainApp() {
	const { state } = useAppContext();

	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			<CloseAccountModal />
			<Toast />
			<PageLayout>
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
						<ExpenseSummary />
						<Income />
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
						<Stack direction="column" sx={{ flexGrow: 1 }}>
							{state.combinedTransactions.length > 0 && <FilterItems />}
							<CombinedItems />
						</Stack>
					</MovementList>
				</Box>
			</PageLayout>
		</>
	);
}

export default MainApp;
