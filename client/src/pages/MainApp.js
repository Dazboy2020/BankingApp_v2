import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';

import MovementList from '../components/Movements/MovementList';

import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';

import PieChart from '../components/Charts/Pie';
import PieEuro from '../components/Charts/PieEuro';

import { Box } from '@mui/material';

import classes from './MainApp.module.css';
import ResponsiveDrawer from '../components/Drawer/Draw';
import Income from '../components/Outline-Card/Income';
import AvailbleFunds from '../components/Outline-Card/AvailableFunds';
import ExpenseItems from '../components/Movements/ExpenseItems';
import DepositItems from '../components/Movements/DepositItems';

function MainApp() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />
			<CloseAccountModal />
			<Toast />
			<Box
				component="main"
				className={classes.body}
				sx={{
					minHeight: '100vh',

					ml: { lg: '18.8rem', md: '18rem', sm: '16rem', s: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
					bgcolor: '#ececec',
				}}
			>
				<Box
					className={classes.body}
					sx={{
						margin: { xs: { ml: 0, mr: 0, mt: 2, mb: 2 }, md: '1rem' },
					}}
				>
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
							// backgroundColor: '##f3e5f5',
							mb: 2,
						}}
					>
						<PieChart />
						<PieEuro />
					</Stack>

					{/* //!Movements */}
					<MovementList>
						<Stack
							spacing={2}
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
								<DepositItems />
							</Box>
							<Box
								component="section"
								sx={{
									display: 'flex',
									flexGrow: 1,
									width: '100%',
								}}
							>
								<ExpenseItems />
							</Box>
						</Stack>
					</MovementList>
				</Box>
			</Box>
		</>
	);
}

export default MainApp;
