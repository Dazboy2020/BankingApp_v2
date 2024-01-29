import { useTransactionContext } from '../context/transactionContext';
import { Box } from '@mui/material';
import ResponsiveDrawer from '../components/drawer/Draw';
import AddTransaction from '../components/summary-cards/AddTransaction';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';
import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import DepositItems from '../components/transactionItems/deposit-card/DepositItems';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import PageLayout from './layout/PageLayout';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';

function Deposits() {
	const { expenseType } = useTransactionContext();
	const { displayFilterComponent } = useDisplayFilterComponent();

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<>
			<ResponsiveDrawer />
			<PageLayout>
				<SummaryCardSection
					TotalExpensesCard={<TotalDepositsCard />}
					AvailbleFundsCard={<AvailbleFundsCard />}
					AddTransaction={<AddTransaction expenseType={expenseType} />}
				/>

				<Box sx={layout}>
					{displayFilterComponent()}
					<DepositItems />
				</Box>
			</PageLayout>
		</>
	);
}

export default Deposits;
