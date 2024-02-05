import { Box, Stack } from '@mui/material';
import PieExpenses from '../../components/charts/pie-charts/PieExpenses';
import PieExpenseVDeposit from '../../components/charts/pie-charts/PieExpenseVDeposit';
import FilterMenuBar from '../../components/filter/FilterMenuBar';
import HidePieButton from '../../components/buttons/HidePieButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '../../context/context';

function PieChartSection() {
	const { isExpanded, setIsExpanded } = useAppContext();

	const chartStyle = {
		display: 'flex',
		alignItems: 'centre',
		justifyContent: 'space-around',
		mb: { xs: 2, sm: 5, md: 8 },
	};
	return (
		<Box sx={{ mt: { xs: 5, md: 10 } }}>
			<FilterMenuBar
				actionButton={
					<HidePieButton
						setIsExpanded={setIsExpanded}
						isExpanded={isExpanded}
					/>
				}
			/>
			<AnimatePresence>
				{isExpanded && (
					<Stack
						component={motion.div}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
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
