import { Stack } from '@mui/material';
import classes from './Movements.module.css';
import { useAppContext } from '../../context/context';

const MovementsExpenses = () => {
	const { state } = useAppContext();

	const movementsToDisplay = state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	return (
		<ul className={animate}>
			{moves.map((item) => (
				<div
					key={Math.floor(Math.random() * 10000) + 1}
					className={classes.movements}
				>
					<Stack className={classes.movements__row}>
						<span className={classes.movements__type__expense}>Expense</span>
						<span className={classes.movements__date}>{item.date}</span>
						<span className={classes.movements__category}>{item.category}</span>
						<span className={classes.movements__value}>€{item.amount}</span>
					</Stack>
				</div>
			))}
		</ul>
	);
};

export default MovementsExpenses;
