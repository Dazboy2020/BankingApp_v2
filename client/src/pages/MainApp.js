import { useAppContext } from '../context/context';
import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';
import MovementList from '../components/transactionItems/MovementList';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import ResponsiveDrawer from '../components/drawer/Draw';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';
import PieExpenses from '../components/charts/pie-charts/PieExpenses';
import PieExpenseVDeposit from '../components/charts/pie-charts/PieExpenseVDeposit';
import CombinedItems from '../components/transactionItems/CombinedItems';
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
					<TotalExpensesCard />
					<TotalDepositsCard />
					<AvailbleFundsCard />
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
					<Stack direction="column" sx={{ flexGrow: 1 }}>
						{state.combinedTransactions.length > 0 && <FilterItems />}
						<CombinedItems type="combined" />
					</Stack>
				</MovementList>
			</PageLayout>
		</>
	);
}

export default MainApp;
