import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants } from '../transactionItems/variants';
import classes from '../transactionItems/layout/Movements.module.css';
function AnimatedList({ items, children }) {
	return (
		<div className={classes.movements__row}>
			<AnimatePresence>
				{items.map((item, index) => (
					<motion.li
						style={{ listStyleType: 'none' }}
						key={`${item.id}-${index}`}
						custom={index}
						initial="initial"
						animate="animate"
						exit="exitAnimation"
						variants={containerVariants}
						layout
					>
						{children(item)}
					</motion.li>
				))}
			</AnimatePresence>
		</div>
	);
}

export default AnimatedList;
