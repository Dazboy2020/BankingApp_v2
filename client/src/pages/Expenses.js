import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box, Stack } from '@mui/material';

import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';
import ExpenseItems from '../components/Movements/ExpenseItems';
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

					ml: { lg: '18.8rem', md: '18rem', sm: '16rem', s: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
					bgcolor: '#ececec',
				}}
			>
				<Stack
					spacing={2}
					direction={{ sm: 'column', md: 'row' }}
					sx={{
						ml: 6,
						mr: 6,
						mt: 10,
					}}
				>
					<AddTransaction />
					<ExpenseSummary />
					<AvailbleFunds />
				</Stack>
				<Box
					sx={{
						ml: 6,
						mr: 6,
						mt: 4,
					}}
				>
					<ExpenseItems />
				</Box>
			</Box>
		</>
	);
}

export default Expenses;
