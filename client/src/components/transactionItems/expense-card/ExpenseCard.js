import { useAppContext } from '../../../context/context';
import { Stack, Box } from '@mui/material';
import classes from '../Movements.module.css';

import React from 'react';
import ExpenseCardTitle from './ExpenseCardTitle';
import ExpenseCardDate from './ExpenseCardDate';
import ExpenseCardCategory from './ExpenseCardCategory';
import ExpenseCardButtons from './ExpenseCardButtons';
import ExpenseCardAmount from './ExpenseCardAmount';
import CardWrapper from '../CardWrapper';

function ExpenseCard({ expense }) {
	const { state } = useAppContext();

	const styling = {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
	};

	const expenseEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<CardWrapper>
			<Stack component="section" className={expenseEditMode}>
				<ExpenseCardTitle />
				<ExpenseCardDate expense={expense} />
				<ExpenseCardCategory expense={expense} />

				<Box sx={styling}>
					<ExpenseCardButtons expense={expense} />
					<ExpenseCardAmount expense={expense} />
				</Box>
			</Stack>
		</CardWrapper>
	);
}

export default ExpenseCard;
