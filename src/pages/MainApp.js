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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Card } from '@mui/material';
import ExpenseSummary from '../components/Outline-Card/OutlineExpenseSummary';

const theme = createTheme({
	palette: {
		mode: 'light',
	},
	typography: {
		fontFamily: ['poppins', 'Nunito Sans'].join(','),
	},
});

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
			<Box bgcolor={'background.default'} color={'text.primary'}>
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
					spacing={1}
					direction={{ s: 'column', sm: 'row' }}
					sx={{
						justifyContent: 'space-between',
					}}
				>
					<BasicCardSummary
						sx={{
							width: {
								lg: 200,
								color: 'primary',
							},
						}}
						totalExpenses={totalExpenses}
						totalIncome={totalIncome}
						currency={currency}
						setSort={setSort}
						accounts={accounts}
						user={user}
					/>
					<ExpenseSummary
						sx={{
							width: {
								lg: 200,
								color: 'primary',
							},
						}}
						accountMovements={accountMovements}
						totalExpenses={totalExpenses}
						totalIncome={totalIncome}
						currency={currency}
						setSort={setSort}
						accounts={accounts}
						user={user}
					/>
					<BasicCardFX
						sx={{
							width: {
								lg: 200,
							},
							color: 'primary',
						}}
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
			</Box>
		</ThemeProvider>
	);
}

export default MainApp;
