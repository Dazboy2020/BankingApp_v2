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
import { Card, Paper } from '@mui/material';
import ExpenseSummary from '../components/Outline-Card/OutlineExpenseSummary';

import theme from '../theme';

function MainApp({
	open,
	setOpen,
	LogUserOut,
	openModal,
	setOpenModal,
	openToast,
	setOpenToast,
	accountMovements,
	totalExpenses,
	totalIncome,
	setCurrency,
	currency,
	setSort,
	setAccountMovements,
	accounts,
	user,
	sort,
}) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper
				elevation={24}
				sx={{
					margin: { xs: 'none', md: '1rem' },
				}}
			>
				<AlertDialogSlide
					open={open}
					setOpen={setOpen}
					LogUserOut={LogUserOut}
				/>
				<CloseAccountModal
					openModal={openModal}
					setOpenModal={setOpenModal}
					LogUserOut={LogUserOut}
				/>
				<Toast openToast={openToast} setOpenToast={setOpenToast} />

				<Stack
					spacing={3}
					direction={{ s: 'column', sm: 'row' }}
					sx={{
						justifyContent: 'space-between',
						mt: 1,
					}}
				>
					<BasicCardSummary
						totalExpenses={totalExpenses}
						totalIncome={totalIncome}
						currency={currency}
						setSort={setSort}
						accounts={accounts}
						user={user}
					/>
					<ExpenseSummary
						accountMovements={accountMovements}
						totalExpenses={totalExpenses}
						totalIncome={totalIncome}
						currency={currency}
						setSort={setSort}
						accounts={accounts}
						user={user}
					/>
					<BasicCardFX
						accountMovements={accountMovements}
						setAccountMovements={setAccountMovements}
						setOpenToast={setOpenToast}

						// totalExpenses={totalExpenses}
						// totalIncome={totalIncome}
						// setSort={setSort}
						// accounts={accoun
						// user={user}
					/>
					{/* <BasicCardTransaction
							accountMovements={accountMovements}
							setAccountMovements={setAccountMovements}
							currency={currency}
							totalExpenses={totalExpenses}
							totalIncome={totalIncome}
							setSort={setSort}
							accounts={accounts}
							user={user}
							setOpenToast={setOpenToast}
						/>  */}
				</Stack>

				<Card>
					<Stack
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
						<PieChart
							accountMovements={accountMovements}
							currency={currency}
							sort={sort}
							setSort={setSort}
						/>
						<PieEuro
							accountMovements={accountMovements}
							currency={currency}
							sort={sort}
						/>
					</Stack>
				</Card>

				<MovementList>
					<Stack direction={{ xs: 'column', md: 'row' }}>
						<Card
							sx={{
								display: 'flex',
								flexGrow: 1,
							}}
						>
							<Movements accountMovements={accountMovements} sort={sort} />
						</Card>
						<Card
							sx={{
								display: 'flex',
								flexGrow: 1,
							}}
						>
							<MovementsExpenses
								accountMovements={accountMovements}
								sort={sort}
							/>
						</Card>
					</Stack>
				</MovementList>
			</Paper>
		</ThemeProvider>
	);
}

export default MainApp;
