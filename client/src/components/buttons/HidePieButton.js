import { motion } from 'framer-motion';

import { Box, Button } from '@mui/material';

function HidePieButton({ isPieExpanded, setisPieExpanded }) {
	function handleClick() {
		setisPieExpanded((prev) => (prev = !prev));
	}
	return (
		<Button
			sx={{ ml: 1 }}
			component={motion.button}
			whileTap={{ scale: 1.05 }}
			transition={{ type: 'spring', stiffness: 500 }}
			onClick={handleClick}
		>
			<Box sx={{ mr: 1 }}>{isPieExpanded ? 'Hide Charts' : 'Show Charts'} </Box>
			<Box
				component={motion.span}
				animate={{ rotate: isPieExpanded ? 0 : 180 }}
			>
				&#9662;
			</Box>
		</Button>
	);
}

export default HidePieButton;
