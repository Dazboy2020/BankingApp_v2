import { useAppContext } from '../../context/context';
import { Box, Stack } from '@mui/material';
import AlertDialogSlide from '../../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../../components/drawer/Draw';
import FilterItems from '../../components/filter/Filter';
import AddTransaction from '../../components/summary-cards/AddTransaction';
import AvailbleFundsCard from '../../components/summary-cards/AvailableFundsCard';
import PageLayout from '../layout/PageLayout';
import BudgetCard from '../../components/summary-cards/BudgetCard';
import { useTransactionContext } from '../../context/transactionContext';

const layout = {
	mt: { xs: 5, md: 10 },
};

function TransactionLayout({ TransactionType, TransactionItems }) {
	const { state } = useAppContext();
	const { expenseType } = useTransactionContext();
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
					{TransactionType}
					<AvailbleFundsCard />

					{state.isActive === 4 && !state.isEditing ? (
						<BudgetCard />
					) : (
						<AddTransaction expenseType={expenseType} />
					)}
				</Stack>

				<Box sx={layout}>
					{state.isActive === 1 &&
						!state.isEditing &&
						state.expenses.length > 0 && <FilterItems />}
					{state.isActive === 2 &&
						!state.isEditing &&
						state.deposits.length > 0 && <FilterItems />}

					{TransactionItems}
				</Box>
			</PageLayout>
		</>
	);
}

export default TransactionLayout;
