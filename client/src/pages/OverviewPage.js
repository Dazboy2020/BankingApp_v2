// import { useAppContext } from '../context/context';
// import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import ResponsiveDrawer from '../components/drawer/Draw';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';

import CombinedItems from '../components/transactionItems/CombinedItems';
import PageLayout from './layout/PageLayout';
import PieChartSection from '../features/chart-section/PieChartSection';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import { Box } from '@mui/material';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';
import FramerWrapper from './page-animations/FramerWrapper';

function MainApp() {
	const { displayFilterComponent } = useDisplayFilterComponent();

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<>
			<ResponsiveDrawer />
			{/* <CloseAccountModal /> */}
			<AlertDialogSlide />
			<PageLayout>
				{/* //! Summary Cards */}
				<SummaryCardSection
					totalExpensesCard={<TotalExpensesCard />}
					totalDepositsCard={<TotalDepositsCard />}
					availbleFundsCard={<AvailbleFundsCard />}
				/>

				{/* //! Charts */}
				<FramerWrapper>
					<PieChartSection />
				</FramerWrapper>

				{/* //!Movements */}
				<Box sx={layout}>
					{displayFilterComponent()}
					<CombinedItems type="combined" />
				</Box>
			</PageLayout>
		</>
	);
}

export default MainApp;
