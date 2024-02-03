import { useTransactionContext } from '../context/transactionContext';
import { Box } from '@mui/material';
import AddTransaction from '../components/summary-cards/AddTransaction';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import DepositItems from '../components/transactionItems/deposit-card/DepositItems';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import PageLayout from './layout/PageLayout';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';

function DepositsPage() {
	const { expenseType } = useTransactionContext();
	const { displayFilterComponent } = useDisplayFilterComponent();

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<PageLayout>
			<SummaryCardSection
				totalExpensesCard={<TotalDepositsCard />}
				availbleFundsCard={<AvailbleFundsCard />}
				addTransaction={<AddTransaction expenseType={expenseType} />}
			/>
			<Box sx={layout}>
				{displayFilterComponent()}
				<DepositItems />
			</Box>
		</PageLayout>
	);
}

export default DepositsPage;
