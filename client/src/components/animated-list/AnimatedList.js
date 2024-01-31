import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants } from '../transactionItems/variants';
function AnimatedList({ items, children }) {
	return (
		<AnimatePresence>
			{items.map((item, index) => (
				<motion.li
					style={{ listStyleType: 'none' }}
					key={`${item.id}-${index}`}
					custom={index}
					initial="initial"
					animate="animate"
					exit={{ opacity: 0, scale: 0, height: 1 }}
					variants={containerVariants}
					layout
				>
					{children(item)}
				</motion.li>
			))}
		</AnimatePresence>
	);
}

export default AnimatedList;
