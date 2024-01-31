import { useAppContext } from '../context/context';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import ResponsiveDrawer from '../components/drawer/Draw';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';

import CombinedItems from '../components/transactionItems/CombinedItems';
import PageLayout from './layout/PageLayout';
import PieChartSection from '../features/chart-section/PieChartSection';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import FilterItems from '../components/filter/Filter';
import { Box } from '@mui/material';
import FramerWrapper from './page-animations/FramerWrapper';

function MainApp() {
	const { state } = useAppContext();
	// const { displayFilterComponent } = useDisplayFilterComponent();

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<>
			<ResponsiveDrawer />
			<CloseAccountModal />
			<AlertDialogSlide />
			<PageLayout>
				<FramerWrapper>
					{/* //! Summary Cards */}

					<SummaryCardSection
						TotalExpensesCard={<TotalExpensesCard />}
						TotalDepositsCard={<TotalDepositsCard />}
						AvailbleFundsCard={<AvailbleFundsCard />}
					/>

					{/* //! Charts */}
					<PieChartSection />

					{/* //!Movements */}

					<Box sx={layout}>
						{state.combinedTransactions.length > 0 && <FilterItems />}
						<CombinedItems type="combined" />
					</Box>
				</FramerWrapper>
			</PageLayout>
		</>
	);
}

export default MainApp;
