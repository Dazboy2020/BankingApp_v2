import { useAppContext } from '../../context/context';
import { Box, Stack } from '@mui/material';
import AlertDialogSlide from '../../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../../components/drawer/Draw';
import FilterItems from '../../components/filter/Filter';
import AddTransaction from '../../components/outline-Card/AddTransaction';
import AvailbleFunds from '../../components/outline-Card/AvailableFunds';
import PageLayout from '../layout/PageLayout';

function TransactionLayout({ TransactionType, TransactionItems }) {
	const { state } = useAppContext();
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<PageLayout>
				<Stack
					spacing={2}
					direction={{ md: 'column', lg: 'row' }}
					sx={{
						ml: { xs: 3, sm: 6 },
						mr: { xs: 3, sm: 6 },
						mt: { xs: 5, md: 10 },
					}}
				>
					<AvailbleFunds />
					{TransactionType}
					<AddTransaction />
				</Stack>

				<Box
					sx={{
						ml: { xs: 3, sm: 6 },
						mr: { xs: 3, sm: 6 },
						mt: 4,
					}}
				>
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
