import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';

import MovementList from '../components/Movements/MovementList';
import Movements from '../components/Movements/Movements';

import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';

import PieChart from '../components/Charts/Pie';
import PieEuro from '../components/Charts/PieEuro';

import MovementsExpenses from '../components/Movements/Movements_Expenses';
import { Box, Paper } from '@mui/material';

import classes from './MainApp.module.css';
import ResponsiveDrawer from '../components/Drawer/Draw';
import Income from '../components/Outline-Card/Income';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';

function MainApp() {
	return (
		<>
			<ResponsiveDrawer />
			<Box
				sx={{
					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
				}}
			>
				<Paper
					component="main"
					className={classes.body}
					elevation={24}
					sx={{
						margin: { xs: 'none', md: '1rem' },
					}}
				>
					<AlertDialogSlide />
					<CloseAccountModal />
					<Toast />

					<Stack
						component="section"
						spacing={3}
						direction={{ sm: 'column', md: 'row' }}
						sx={{
							justifyContent: 'space-between',
						}}
					>
						<Income />
						<ExpenseSummary />
						<AvailbleFunds />
					</Stack>

					{/* //! Charts */}
					<Stack
						component="section"
						spacing={2}
						direction={{ xs: 'column', md: 'row' }}
						sx={{
							display: 'flex',
							alignItems: 'centre',
							justifyContent: 'space-around',
							paddingTop: '1rem',
							backgroundColor: '##f3e5f5',
							mb: 2,
						}}
					>
						<PieChart />
						<PieEuro />
					</Stack>

					{/* //!Movements */}
					<Paper sx={{ mt: 2 }}>
						<MovementList>
							<Stack
								component="section"
								direction={{ xs: 'column', md: 'row' }}
							>
								<Box
									component="section"
									sx={{
										display: 'flex',
										flexGrow: 1,
										width: '100%',
									}}
								>
									<Movements />
								</Box>
								<Box
									component="section"
									sx={{
										display: 'flex',
										flexGrow: 1,
										width: '100%',
									}}
								>
									<MovementsExpenses />
								</Box>
							</Stack>
						</MovementList>
					</Paper>
				</Paper>
			</Box>
		</>
	);
}

export default MainApp;
