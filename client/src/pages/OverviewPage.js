import { useAppContext } from '../context/context';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';

import PageLayout from './layout/PageLayout';
import PieChartSection from '../features/chart-section/PieChartSection';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import FilterMenuBar from '../components/filter/FilterMenuBar';
import HidePieButton from '../components/buttons/HidePieButton';
import HideSummaryButton from '../components/buttons/HideSummaryButton';
import { AnimatePresence } from 'framer-motion';
import TransactionSection from '../features/transaction-section/TransactionSection';

function MainApp() {
	const {
		isPieExpanded,
		setisPieExpanded,
		isSummaryExpanded,
		setIsSummaryExpanded,
	} = useAppContext();

	return (
		<PageLayout>
			<FilterMenuBar
				actionButton={
					<HidePieButton
						setisPieExpanded={setisPieExpanded}
						isPieExpanded={isPieExpanded}
						type="card"
					/>
				}
				actionButton2={
					<HideSummaryButton
						isSummaryExpanded={isSummaryExpanded}
						setIsSummaryExpanded={setIsSummaryExpanded}
						type="card"
					/>
				}
			/>
			<AnimatePresence>
				{isSummaryExpanded && (
					<SummaryCardSection
						key="summary-card-section"
						totalExpensesCard={<TotalExpensesCard />}
						totalDepositsCard={<TotalDepositsCard />}
						availbleFundsCard={<AvailbleFundsCard />}
					/>
				)}

				{isPieExpanded && <PieChartSection key="pie-chart-section" />}

				<TransactionSection key="transaction-section" />
			</AnimatePresence>
		</PageLayout>
	);
}

export default MainApp;
