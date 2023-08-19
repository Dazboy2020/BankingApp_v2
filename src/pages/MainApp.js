import { Stack } from '@mui/system';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import CloseAccountModal from '../UI/AlertDialogue/CloseAccountModal';
import Toast from '../UI/AlertDialogue/Toast';
import BasicCardSummary from '../components/Outline-Card/OutlinedCardSummary';
import BasicCardFX from '../components/Outline-Card/OutlinedCardFX';
import MovementList from '../components/Charts/Movements/MovementList';
import Movements from '../components/Charts/Movements/Movements';
import PieChart from '../components/Charts/Pie';
import PieEuro from '../components/Charts/PieEuro';

import classes from '../components/Charts/pie_wrapper.Module.css';
import styles from './MainApp.module.css';

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
	currency,
	setSort,
	setAccountMovements,
	accounts,
	user,
	sort,
}) {
	return (
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
						// currency={currency}
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
					direction={{ xs: 'column', md: 'row' }}
					sx={{
						backgroundColor: '#EEEEEE',
						m: 1,
						mt: 2,
						display: 'flex',
						// padding: '1rem',
					}}
					className={classes.pie_wrapper}
				>
					<PieChart
						accountMovements={accountMovements}
						currency={currency}
						sort={sort}
					/>
					<PieEuro
						accountMovements={accountMovements}
						currency={currency}
						sort={sort}
					/>
				</Stack>
				<MovementList>
					<Movements
						accountMovements={accountMovements}
						currency={currency}
						sort={sort}
					/>
				</MovementList>
			</>
		</div>
	);
}

export default MainApp;
