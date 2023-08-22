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

// import classes from '../components/Charts/pie_wrapper.Module.css';
import styles from './MainApp.module.css';
import MovementsExpenses from '../components/Movements/Movements_Expenses';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
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
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className={styles.body}>
				<>
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
						direction={{ s: 'column', sm: 'row' }}
						sx={{
							justifyContent: 'space-between',
							// m: 1,
						}}
					>
						<BasicCardSummary
							sx={{
								width: {
									lg: 200,
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
					<Stack
						className={styles.pie_wrapper}
						direction={{ xs: 'column', md: 'row' }}
						sx={{
							display: 'flex',
							backgroundColor: '#EEEEEE',
							alignItems: 'centre',
							justifyContent: 'space-around',
							paddingTop: '1rem',
							// height: '40vh',
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
					<MovementList>
						<Stack direction={{ xs: 'column', md: 'row' }} sx={{ flexGrow: 1 }}>
							<Movements
								accountMovements={accountMovements}
								// currency={currency}
								sort={sort}
							/>
							<MovementsExpenses
								accountMovements={accountMovements}
								// currency={currency}
								sort={sort}
							/>
						</Stack>
					</MovementList>
				</>
			</div>
		</ThemeProvider>
	);
}

export default MainApp;
