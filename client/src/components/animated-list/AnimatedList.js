import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants, exitAnimation } from '../transactionItems/variants';
import classes from '../transactionItems/layout/Movements.module.css';

function AnimatedList({ items, children }) {
	return (
		<motion.ul
			style={{ listStyleType: 'none' }}
			className={classes.movements__row}
		>
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
		</motion.ul>
	);
}

export default AnimatedList;
