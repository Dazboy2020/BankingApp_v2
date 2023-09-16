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

	const movementsToDisplay = state.isEditing
		? state.editingExpense
		: state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

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
