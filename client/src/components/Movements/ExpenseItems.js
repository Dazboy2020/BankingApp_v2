import { useAppContext } from '../../context/context';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Movements.module.css';
import ExpenseCard from './ExpenseCard';
import { containerVariants, exitAnimation } from './variants';

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
		<ul style={{ listStyleType: 'none' }} className={classes.movements__row}>
			<AnimatePresence>
				{moves.map((expense) => (
					<motion.li
						layout="true"
						key={expense.id}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit={exitAnimation}
					>
						<ExpenseCard expense={expense} />
					</motion.li>
				))}
			</AnimatePresence>
		</ul>
	);
};

export default ExpenseItems;
