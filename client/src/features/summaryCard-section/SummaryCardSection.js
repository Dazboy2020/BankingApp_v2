import { easeInOut } from 'framer-motion';
import { Stack } from '@mui/material';
import TotalExpensesCard from '../../components/summary-cards/TotalExpensesCard';
import TotalDepositsCard from '../../components/summary-cards/TotalDepositsCard';
import AvailbleFundsCard from '../../components/summary-cards/AvailableFundsCard';
import AddTransaction from '../../components/summary-cards/AddTransaction';

import { motion } from 'framer-motion';

function SummaryCardSection({
	totalExpensesCard,
	totalDepositsCard,
	availbleFundsCard,
	addTransaction,
	budgetCard,
}) {
	return (
		<Stack
			key="summary-card-section"
			component={motion.div}
			initial={{ height: 0, opacity: 0 }}
			animate={{
				height: 'auto',
				opacity: 1,
				transition: { ease: easeInOut },
				y: [200, 0],
			}}
			exit={{
				y: 200,
				height: 0,
				opacity: 0,
				transition: { ease: easeInOut },
			}}
			spacing={3}
			direction={{ sm: 'column', lg: 'row' }}
			sx={{
				width: '100%',
				justifyContent: 'space-between',
				mt: { xs: 5, md: 5 },
				mb: { xs: 6, s: 6, md: 10 },
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
