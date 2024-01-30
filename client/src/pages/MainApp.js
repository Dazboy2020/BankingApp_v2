import { useAppContext } from '../context/context';
import { Stack } from '@mui/system';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
// import MovementList from '../components/transactionItems/layout/MovementList';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import ResponsiveDrawer from '../components/drawer/Draw';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';

import CombinedItems from '../components/transactionItems/CombinedItems';
import FilterItems from '../components/filter/Filter';
import PageLayout from './layout/PageLayout';
import PieChartSection from '../features/chart-section/PieChartSection';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';

function MainApp() {
	const { state } = useAppContext();

	return (
		<>
			<ResponsiveDrawer />
			<CloseAccountModal />
			<AlertDialogSlide />
			<PageLayout>
				{/* //! Summary Cards */}

				<SummaryCardSection
					TotalExpensesCard={<TotalExpensesCard />}
					TotalDepositsCard={<TotalDepositsCard />}
					AvailbleFundsCard={<AvailbleFundsCard />}
				/>

				{/* //! Charts */}
				<PieChartSection />

				{/* //!Movements */}
				<Stack direction="column" sx={{ flexGrow: 1 }}>
					{state.combinedTransactions.length > 0 && <FilterItems />}
					<CombinedItems type="combined" />
				</Stack>
			</PageLayout>
		</>
	);
}

export default MainApp;
