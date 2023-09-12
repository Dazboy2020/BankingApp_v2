import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box, Stack } from '@mui/material';

import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import AddTransaction from '../components/Outline-Card/AddTransaction';
import Movements from '../components/Movements/Movements';
import Income from '../components/Outline-Card/Income';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';
import classes from './Deposits.module.css';

function Expenses() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

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
					<Movements />
				</Box>
			</Box>
		</>
	);
}

export default Expenses;
