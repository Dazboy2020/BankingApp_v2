import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box, Stack } from '@mui/material';

import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';
import MovementsExpenses from '../components/Movements/Movements_Expenses';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';
import classes from './Expenses.module.css';

function Expenses() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			{/* <Toast /> */}

			<Box
				className={classes.body}
				sx={{
					minHeight: '100vh',

					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
					bgcolor: '#ececec',
				}}
			>
				<Stack
					spacing={6}
					direction={{ sm: 'column', md: 'row' }}
					sx={{
						margin: { xs: { ml: 0, mr: 0, mt: 2, mb: 2 }, md: '1rem' },
					}}
				>
					<AddTransaction />
					<ExpenseSummary />
					<AvailbleFunds />
				</Stack>
				<Box
					sx={{
						margin: { xs: { ml: 0, mr: 0, mt: 2, mb: 2 }, md: '1rem' },
					}}
				>
					<MovementsExpenses />
				</Box>
			</Box>
		</>
	);
}

export default Expenses;
