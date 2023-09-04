import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box, Card, Stack } from '@mui/material';
import Toast from '../UI/AlertDialogue/Toast';

import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';
import MovementsExpenses from '../components/Movements/Movements_Expenses';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';

function Expenses() {
	return (
		<Box sx={{ backgroundColor: '#ececec' }}>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			<Toast />

			<Box
				sx={{
					height: '100vh',

					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
				}}
			>
				<Stack
					spacing={2}
					direction={{ sm: 'column', md: 'row' }}
					sx={{ m: 2 }}
				>
					<AddTransaction />
					<ExpenseSummary />
					<AvailbleFunds />
				</Stack>
				<Card sx={{ m: 2 }}>
					<MovementsExpenses />
				</Card>
			</Box>
		</Box>
	);
}

export default Expenses;
