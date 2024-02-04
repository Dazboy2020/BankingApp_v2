import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';

import CombinedItems from '../components/transactionItems/CombinedItems';
import PageLayout from './layout/PageLayout';
import PieChartSection from '../features/chart-section/PieChartSection';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import { Box } from '@mui/material';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';

function MainApp() {
	const { displayFilterComponent } = useDisplayFilterComponent();

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<PageLayout>
			{/* //! Summary Cards */}
			<SummaryCardSection
				totalExpensesCard={<TotalExpensesCard />}
				totalDepositsCard={<TotalDepositsCard />}
				availbleFundsCard={<AvailbleFundsCard />}
			/>

			{/* //! Charts */}
			<PieChartSection />

			{/* //!Transactions*/}
			<Box sx={layout}>
				{displayFilterComponent()}
				<CombinedItems type="combined" />
			</Box>
		</PageLayout>
	);
}

export default MainApp;
