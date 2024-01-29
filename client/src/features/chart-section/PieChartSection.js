import { Stack } from '@mui/material';
import PieExpenses from '../../components/charts/pie-charts/PieExpenses';
import PieExpenseVDeposit from '../../components/charts/pie-charts/PieExpenseVDeposit';

function PieChartSection() {
	const chartStyle = {
		display: 'flex',
		alignItems: 'centre',
		justifyContent: 'space-around',
		mb: { xs: 2, sm: 5, md: 8 },
		mt: { xs: 2, sm: 5, md: 8 },
	};
	return (
		<Stack
			component="section"
			spacing={4}
			direction={{ s: 'column', md: 'column', lg: 'row' }}
			sx={chartStyle}
		>
			<PieExpenses />
			<PieExpenseVDeposit />
		</Stack>
	);
}

export default PieChartSection;
