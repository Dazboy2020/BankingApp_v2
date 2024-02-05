import { Stack } from '@mui/material';
import TotalExpensesCard from '../../components/summary-cards/TotalExpensesCard';
import TotalDepositsCard from '../../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../../components/summary-cards/AvailableFundsCard';
import AddTransaction from '../../components/summary-cards/AddTransaction';

function SummaryCardSection({
	totalExpensesCard,
	totalDepositsCard,
	availbleFundsCard,
	addTransaction,
	budgetCard,
	...restProps
}) {
	return (
		<Stack
			component="section"
			spacing={3}
			direction={{ sm: 'column', lg: 'row' }}
			sx={{
				width: '100%',
				justifyContent: 'space-between',
				mt: { xs: 5, md: 5 },
				mb: { lg: 2 },
				minHeight: { lg: '12rem' },
			}}
		>
			{totalExpensesCard && <TotalExpensesCard />}
			{totalDepositsCard && <TotalDepositsCard />}
			{availbleFundsCard && <AvailbleFundsCard />}
			{addTransaction && <AddTransaction />}
			{budgetCard && budgetCard()}
		</Stack>
	);
}

export default SummaryCardSection;
