import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants } from '../transactionItems/variants';
import { Box } from '@mui/material';
function AnimatedList({ items, children }) {
	return (
		<AnimatePresence key="list-component">
			{items.map((item, index) => (
				<Box
					component={motion.li}
					style={{ listStyleType: 'none' }}
					key={`${item.id}-${index}`}
					custom={index}
					initial="initial"
					animate="animate"
					exit={{ opacity: 0, scale: 0, height: 0 }}
					variants={containerVariants}
					layout
				>
					{children(item)}
				</Box>
			))}
		</AnimatePresence>
	);
}

export default AnimatedList;
