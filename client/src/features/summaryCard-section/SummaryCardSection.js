import { Stack } from '@mui/material';

function SummaryCardSection({
	TotalExpensesCard,
	TotalDepositsCard,
	AvailbleFundsCard,
	AddTransaction,
	BudgetCard,
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
			}}
		>
			{TotalExpensesCard && TotalExpensesCard}
			{TotalDepositsCard && TotalDepositsCard}
			{AvailbleFundsCard && AvailbleFundsCard}
			{AddTransaction && AddTransaction}
			{BudgetCard && BudgetCard}
		</Stack>
	);
}

export default SummaryCardSection;
