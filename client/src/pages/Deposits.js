import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box, Stack } from '@mui/material';

import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import Income from '../components/Outline-Card/Income';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';
import classes from './Deposits.module.css';
import DepositItems from '../components/Movements/DepositItems';

function Deposits() {
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
					bgcolor: '#ececec',
				}}
			>
				<Stack
					spacing={2}
					direction={{ sm: 'column', md: 'row' }}
					// sx={{ m: 2 }}
					sx={{
						margin: { xs: { ml: 0, mr: 0, mt: 2, mb: 2 }, md: '1rem' },
					}}
				>
					<AddTransaction />
					<Income />
					<AvailbleFunds />
				</Stack>
				<Box
					sx={{
						margin: { xs: { ml: 0, mr: 0, mt: 2, mb: 2 }, md: '1rem' },
					}}
				>
					<DepositItems />
				</Box>
			</Box>
		</>
	);
}

export default Deposits;
