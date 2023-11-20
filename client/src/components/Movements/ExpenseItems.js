import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

import ExpenseCard from './ExpenseCard';

import { motion } from 'framer-motion';

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

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	return (
		<motion.ul
			className={classes.movements__row}
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.2 }}
		>
			{moves.map((expense) => (
				<ExpenseCard expense={expense} key={expense.id} />
			))}
		</motion.ul>
	);
};

export default ExpenseItems;
