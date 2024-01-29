import { useAppContext } from '../context/context';
import { useTransactionContext } from '../context/transactionContext';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import CombinedItems from '../components/transactionItems/CombinedItems';
import ResponsiveDrawer from '../components/drawer/Draw';
import PageLayout from './layout/PageLayout';
import SummaryCardSection from '../features/summaryCard-section/SummaryCardSection';
import BudgetCard from '../components/summary-cards/BudgetCard';
import AddTransaction from '../components/summary-cards/AddTransaction';
import AvailbleFundsCard from '../components/summary-cards/AvailableFundsCard';
import useDisplayFilterComponent from '../hooks/useDisplayFilterComponent';
import { Box } from '@mui/material';

function Budget() {
	const { state } = useAppContext();
	const { expenseType } = useTransactionContext();

	const { displayFilterComponent } = useDisplayFilterComponent();

	function budgetCardToDisplay() {
		if (state.isActive === 4 && !state.isEditing) {
			return <BudgetCard />;
		} else {
			return <AddTransaction expenseType={expenseType} />;
		}
	}

	const layout = {
		mt: { xs: 5, md: 10 },
	};

	return (
		<>
			<ResponsiveDrawer />
			<PageLayout>
				<SummaryCardSection
					TotalExpensesCard={<TotalExpensesCard type="budget" />}
					AvailbleFundsCard={<AvailbleFundsCard type="budget" />}
					AddTransaction={budgetCardToDisplay()}
				/>

				<Box sx={layout}>
					{displayFilterComponent()}
					<CombinedItems type="budget" />
				</Box>
			</PageLayout>
		</>
	);
}

export default Budget;
