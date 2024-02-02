import { Stack } from '@mui/material';
import TotalExpensesCard from '../../components/summary-cards/TotalExpensesCard';
import TotalDepositsCard from '../../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../../components/summary-cards/AvailableFundsCard';
import AddTransaction from '../../components/summary-cards/AddTransaction';
import BudgetCard from '../../components/summary-cards/BudgetCard';

function SummaryCardSection({
	totalExpensesCard,
	totalDepositsCard,
	availbleFundsCard,
	addTransaction,
	budgetCard,
}) {
	return (
		<Stack
			component="section"
			spacing={3}
			direction={{ sm: 'column', lg: 'row' }}
			sx={{
				width: '100%',
				justifyContent: 'space-between',
				mt: { xs: 5, md: 10 },
				mb: { lg: 2 },
				minHeight: { lg: '12rem' },
			}}
		>
			{totalExpensesCard && <TotalExpensesCard />}
			{totalDepositsCard && <TotalDepositsCard />}
			{availbleFundsCard && <AvailbleFundsCard />}
			{addTransaction && <AddTransaction />}
			{budgetCard && <BudgetCard />}
		</Stack>
	);
}

export default SummaryCardSection;
