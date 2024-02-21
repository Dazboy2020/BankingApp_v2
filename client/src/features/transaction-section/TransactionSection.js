import { Box } from '@mui/material';
import useDisplayFilterComponent from '../../hooks/useDisplayFilterComponent';
import CombinedItems from '../../components/transactionItems/CombinedItems';
import { motion } from 'framer-motion';

function TransactionSection() {
	const { displayFilterComponent } = useDisplayFilterComponent();
	const layout = {
		mt: 0,
	};
	return (
		<Box sx={layout} key="transaction-section" component={motion.div} layout>
			{displayFilterComponent()}
			<CombinedItems type="combined" />
		</Box>
	);
}

export default TransactionSection;
