import { Box, Stack } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../components/Drawer/Draw';
import { useDarkMode } from '../Hooks/useDarkMode';
import classes from './MainApp.module.css';
import { useAppContext } from '../context/context';
import FilterItems from '../components/Filter/Filter';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';

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

					ml: { lg: '18.8rem', md: '18rem', sm: '16rem', s: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
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
					{TransactionType}
					<AvailbleFunds />
				</Stack>
				<Box
					sx={{
						ml: 6,
						mr: 6,
						mt: 4,
					}}
				>
					{!state.isEditing && <FilterItems />}
					{TransactionItems}
				</Box>
			</Box>
		</>
	);
}

export default TransactionLayout;
