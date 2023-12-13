import { useAppContext } from '../../context/context';
import { motion } from 'framer-motion';
import classes from './Movements.module.css';
import ExpenseCard from './ExpenseCard';
import { containerVariants, exitAnimation } from './variants';
import NoDataCard from './NoDataCard';

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
			{moves.length === 0 && (
				<motion.li
					// layout="true"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<NoDataCard type="Expense" />
				</motion.li>
			)}

			{moves.map((expense) => (
				<motion.li
					// layout="true"
					key={expense.id}
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit={exitAnimation}
				>
					<ExpenseCard expense={expense} />
				</motion.li>
			))}
		</ul>
	);
};

export default ExpenseItems;
