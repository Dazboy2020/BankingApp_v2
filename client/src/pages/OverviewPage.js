import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';

import CombinedItems from '../components/transactionItems/CombinedItems';
import PageLayout from './layout/PageLayout';
import PieChartSection from '../features/chart-section/PieChartSection';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import { Box } from '@mui/material';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';
import FilterMenuBar from '../components/filter/FilterMenuBar';
import HidePieButton from '../components/buttons/HidePieButton';
import { useAppContext } from '../context/context';

function MainApp() {
	const { displayFilterComponent } = useDisplayFilterComponent();
	const { isExpanded, setIsExpanded } = useAppContext();

	const layout = {
		// mt: { xs: 5, md: 10 },
		mt: 0,
	};

	return (
		<PageLayout>
			{/* //! Summary Cards */}

			<FilterMenuBar
				actionButton={
					<HidePieButton
						setIsExpanded={setIsExpanded}
						isExpanded={isExpanded}
					/>
				}
			/>
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
