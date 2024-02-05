import { Box, Stack } from '@mui/material';
import PieExpenses from '../../components/charts/pie-charts/PieExpenses';
import PieExpenseVDeposit from '../../components/charts/pie-charts/PieExpenseVDeposit';

import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { useAppContext } from '../../context/context';

function PieChartSection() {
	const { isPieExpanded } = useAppContext();

	const chartStyle = {
		display: 'flex',
		alignItems: 'centre',
		justifyContent: 'space-around',
		mb: { xs: 2, sm: 5, md: 8 },
	};
	return (
		<Box sx={{ mt: { xs: 5, md: 10 } }}>
			<AnimatePresence>
				{isPieExpanded && (
					<Stack
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
						spacing={4}
						direction={{ s: 'column', md: 'column', lg: 'row' }}
						sx={chartStyle}
						layout
					>
						<PieExpenses />
						<PieExpenseVDeposit />
					</Stack>
				)}
			</AnimatePresence>
		</Box>
	);
}

export default PieChartSection;
