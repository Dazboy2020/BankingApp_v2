import { useAppContext } from '../../context/context';
import { Box, Stack } from '@mui/material';
import AlertDialogSlide from '../../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../../components/drawer/Draw';
import FilterItems from '../../components/filter/Filter';
import AddTransaction from '../../components/outline-Card/AddTransaction';
import AvailbleFunds from '../../components/outline-Card/AvailableFunds';
import PageLayout from '../layout/PageLayout';
import BudgetCard from '../../components/outline-Card/BudgetCard';

const layout = {
	mt: { xs: 5, md: 10 },
};

function TransactionLayout({ TransactionType, TransactionItems }) {
	const { state } = useAppContext();
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<PageLayout>
				<Stack spacing={2} direction={{ md: 'column', lg: 'row' }}>
					{TransactionType}
					<AvailbleFunds />

					{state.isActive === 1 || state.isActive === 2 ? (
						<AddTransaction />
					) : null}
					{state.isActive === 4 ? <BudgetCard /> : null}
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
