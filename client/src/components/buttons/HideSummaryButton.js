import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

function HideSummaryButton({ isSummaryExpanded, setIsSummaryExpanded }) {
	function handleClick() {
		setIsSummaryExpanded((prev) => (prev = !prev));

		console.log(isSummaryExpanded);
	}
	return (
		<Button
			component={motion.button}
			whileTap={{ scale: 1.05 }}
			transition={{ type: 'spring', stiffness: 500 }}
			onClick={handleClick}
		>
			<Box sx={{ mr: 1 }}>
				{isSummaryExpanded ? 'Hide Cards' : 'Show Cards'}{' '}
			</Box>
			<Box
				component={motion.span}
				animate={{ rotate: isSummaryExpanded ? 0 : 180 }}
			>
				&#9662;
			</Box>
		</Button>
	);
}

export default HideSummaryButton;
