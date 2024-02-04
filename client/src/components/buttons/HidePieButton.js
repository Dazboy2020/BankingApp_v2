import { motion } from 'framer-motion';

import { Box, Button } from '@mui/material';

function HidePieButton({ isExpanded, setIsExpanded }) {
	function handleClick() {
		setIsExpanded((prev) => (prev = !prev));
	}
	return (
		<Button
			component={motion.button}
			whileTap={{ scale: 1.05 }}
			transition={{ type: 'spring', stiffness: 500 }}
			onClick={handleClick}
		>
			<Box sx={{ mr: 1 }}>{isExpanded ? 'Hide Charts' : 'Show Charts'} </Box>
			<Box component={motion.span} animate={{ rotate: isExpanded ? 0 : 180 }}>
				&#9662;
			</Box>
		</Button>
	);
}

export default HidePieButton;
