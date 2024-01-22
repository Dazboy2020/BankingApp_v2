import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants, exitAnimation } from '../transactionItems/variants';

function AnimatedList({ items, children }) {
	return (
		<AnimatePresence>
			{items.map((item, index) => (
				<motion.li
					layout="true"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
					key={item.id}
					custom={index}
				>
					{children(item)}
				</motion.li>
			))}
		</AnimatePresence>
	);
}

export default AnimatedList;
