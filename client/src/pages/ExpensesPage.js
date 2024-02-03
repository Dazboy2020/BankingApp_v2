import { useTransactionContext } from '../context/transactionContext';
import AddTransaction from '../components/summary-cards/AddTransaction';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import ExpenseItems from '../components/transactionItems/expense-card/ExpenseItems';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import PageLayout from './layout/PageLayout';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';
import { Box } from '@mui/material';

function ExpensesPage() {
	const { expenseType } = useTransactionContext();
	const { displayFilterComponent } = useDisplayFilterComponent();

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<PageLayout>
			<SummaryCardSection
				totalExpensesCard={<TotalExpensesCard />}
				availbleFundsCard={<AvailbleFundsCard />}
				addTransaction={<AddTransaction expenseType={expenseType} />}
			/>
			<Box sx={layout}>
				{displayFilterComponent()}
				<ExpenseItems />
			</Box>
		</PageLayout>
	);
}

export default ExpensesPage;
