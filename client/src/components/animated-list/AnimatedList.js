import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants, exitAnimation } from '../transactionItems/variants';

function AnimatedList({ items, children }) {
	return (
		<AnimatePresence>
			{items.map((item, index) => (
				<motion.li
					{...containerVariants}
					style={{ listStyleType: 'none' }}
					layout="true"
					exit={exitAnimation}
					key={`${item.id}-${index}`}
					custom={index}
				>
					{children(item)}
				</motion.li>
			))}
		</AnimatePresence>
	);
}

export default AnimatedList;
