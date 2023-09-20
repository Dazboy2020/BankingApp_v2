import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';
import { useEffect } from 'react';

import ExpenseCard from './ExpenseCard';

const ExpenseItems = () => {
	const { dispatch, state } = useAppContext();

	//! Clear animation
	useEffect(() => {
		const intervalDuration = 3000;

		const intervalId = setInterval(() => {
			dispatch({ type: 'addTransactionAnimate', payload: false });
		}, intervalDuration);

		return () => {
			clearInterval(intervalId);
		};
	}, [dispatch]);

	// let moves = state.isEditing ? state.editingExpense : state.expenses;

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
		<ul className={animate}>
			{moves.map((expense) => (
				<ExpenseCard expense={expense} key={expense.id} />
			))}
		</ul>
	);
};

export default ExpenseItems;
