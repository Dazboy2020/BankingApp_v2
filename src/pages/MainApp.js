import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';
import BasicCardSummary from '../components/Outline-Card/OutlinedCardSummary';
import BasicCardFX from '../components/Outline-Card/OutlinedCardFX';
import MovementList from '../components/Movements/MovementList';
import Movements from '../components/Movements/Movements';

import PieChart from '../components/Charts/Pie';
import PieEuro from '../components/Charts/PieEuro';

import MovementsExpenses from '../components/Movements/Movements_Expenses';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Card, Paper } from '@mui/material';
import ExpenseSummary from '../components/Outline-Card/OutlineExpenseSummary';

import theme from '../theme';

import classes from './MainApp.module.css';

function MainApp() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
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
					direction={{ s: 'column', sm: 'row' }}
					sx={{
						justifyContent: 'space-between',
						mt: 1,
					}}
				>
					<BasicCardSummary />
					<ExpenseSummary />
					<BasicCardFX />
				</Stack>

				<Card>
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
						}}
					>
						<PieChart />
						<PieEuro />
					</Stack>
				</Card>

				<MovementList>
					<Stack component="section" direction={{ xs: 'column', md: 'row' }}>
						<Box
							component="section"
							sx={{
								display: 'flex',
								flexGrow: 1,
							}}
						>
							<Movements />
						</Box>
						<Box
							component="section"
							sx={{
								display: 'flex',
								flexGrow: 1,
							}}
						>
							<MovementsExpenses />
						</Box>
					</Stack>
				</MovementList>
			</Paper>
		</ThemeProvider>
	);
}

export default MainApp;
