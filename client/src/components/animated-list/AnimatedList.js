import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants, exitAnimation } from '../transactionItems/variants';

function AnimatedList({ items, children }) {
	return (
		<AnimatePresence>
			<div>
				{items.map((item, index) => (
					<motion.li
						style={{ listStyleType: 'none' }}
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
			</div>
		</AnimatePresence>
	);
}

export default AnimatedList;
