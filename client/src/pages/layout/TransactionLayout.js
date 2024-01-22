import { useAppContext } from '../../context/context';
import { Box, Stack } from '@mui/material';
import AlertDialogSlide from '../../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../../components/drawer/Draw';
import AddTransaction from '../../components/summary-cards/AddTransaction';
import AvailbleFundsCard from '../../components/summary-cards/AvailableFundsCard';
import PageLayout from '../layout/PageLayout';
import BudgetCard from '../../components/summary-cards/BudgetCard';
import { useTransactionContext } from '../../context/transactionContext';
import useDisplayFilterComponent from '../../hooks/useDisplayFilterComponent';

const layout = {
	mt: { xs: 5, md: 10 },
};

function TransactionLayout({ TransactionTypeCard, TransactionItems }) {
	const { state } = useAppContext();
	const { expenseType } = useTransactionContext();
	const { displayFilterComponent } = useDisplayFilterComponent();

	function availableFundsCardToDisplay() {
		if (state.isActive === 4) {
			return <AvailbleFundsCard type="budget" />;
		} else {
			return <AvailbleFundsCard />;
		}
	}

	function budgetCardToDisplay() {
		if (state.isActive === 4 && !state.isEditing) {
			return <BudgetCard />;
		} else {
			return <AddTransaction expenseType={expenseType} />;
		}
	}

	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<PageLayout>
				<Stack
					component="section"
					spacing={3}
					direction={{ md: 'column', lg: 'row' }}
					sx={{
						justifyContent: 'space-between',
						mt: { xs: 5, md: 10 },
					}}
				>
					{TransactionTypeCard}
					{availableFundsCardToDisplay()}
					{budgetCardToDisplay()}
				</Stack>

				<Box sx={layout}>
					{displayFilterComponent()}

					{TransactionItems}
				</Box>
			</PageLayout>
		</>
	);
}

export default TransactionLayout;
