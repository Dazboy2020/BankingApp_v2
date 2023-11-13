import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box, Stack } from '@mui/material';

import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import Income from '../components/Outline-Card/Income';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';
import classes from './Deposits.module.css';
import DepositItems from '../components/Movements/DepositItems';
import FilterItems from '../components/Filter/Filter';
import { useAppContext } from '../context/context';

function Deposits() {
	const { state } = useAppContext();

	console.log('render');

	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Box
				className={classes.body}
				sx={{
					minHeight: '100vh',

					ml: { lg: '18.8rem', md: '18rem', sm: '16rem', s: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
					// bgcolor: '#ececec',
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
					<Income />
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
					<DepositItems />
				</Box>
			</Box>
		</>
	);
}

export default Deposits;
