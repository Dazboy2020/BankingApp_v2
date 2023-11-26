import { Box, Stack } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../components/drawer/Draw';
import { useDarkMode } from '../hooks/useDarkMode';
import classes from './MainApp.module.css';
import { useAppContext } from '../context/context';
import FilterItems from '../components/filter/Filter';
import AddTransaction from '../components/outline-Card/AddTransaction';
import AvailbleFunds from '../components/outline-Card/AvailableFunds';

function TransactionLayout({ TransactionType, TransactionItems }) {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Box
				className={isDarkMode ? classes.darkmode : classes.body}
				sx={{
					minHeight: '100vh',
					ml: { lg: '19rem', md: '19rem', sm: '16.5rem', s: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
				}}
			>
				<Stack
					spacing={2}
					direction={{ sm: 'column', md: 'row' }}
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
			</Box>
		</>
	);
}

export default TransactionLayout;
