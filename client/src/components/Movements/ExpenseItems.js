import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

import ExpenseCard from './ExpenseCard';

import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: 400,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,

		transition: { delay: 0.25 },
	},
};

const ExpenseItems = () => {
	const { state } = useAppContext();

	let moves;

	if (state.isActive === 0) {
		moves = state.expenses;
	} else {
		if (state.isEditing) {
			moves = state.editingExpense;
		} else {
			moves =
				state.filteredExpenses?.length > 0
					? state.filteredExpenses
					: state.expenses;
		}
	}

	if (!moves) {
		moves = [];
	}

	return (
		<motion.ul className={classes.movements__row}>
			<AnimatePresence>
				{moves.map((expense) => (
					<motion.li
						key={expense.id}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={{
							y: 200,
							opacity: 0,
							scale: 0.9,
							transition: { delay: 0.2 },
						}}
					>
						<ExpenseCard expense={expense} />
					</motion.li>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default ExpenseItems;
