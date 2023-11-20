import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

import ExpenseCard from './ExpenseCard';

import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay: 0.2, delayChildren: 1 },
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
			{moves.map((expense, i) => (
				<motion.li
					key={expense.id}
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<ExpenseCard expense={expense} />
				</motion.li>
			))}
		</motion.ul>
	);
};

export default ExpenseItems;
