import { useAppContext } from '../../../context/context';
import { ExpenseCardContextProvider } from '../../../context/expenseCardContext';
import { Stack, Box } from '@mui/material';
import classes from '../layout/Movements.module.css';

import React from 'react';
import ExpenseCardTitle from './ExpenseCardTitle';
import ExpenseCardDate from './ExpenseCardDate';
import ExpenseCardCategory from './ExpenseCardCategory';
import ExpenseCardButtons from './ExpenseCardButtons';
import ExpenseCardAmount from './ExpenseCardAmount';
import CardWrapper from '../layout/CardWrapper';

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
		<ExpenseCardContextProvider expense={expense}>
			<CardWrapper>
				<Stack component="section" className={expenseEditMode}>
					<ExpenseCardTitle />
					<ExpenseCardDate />
					<ExpenseCardCategory />

					<Box sx={styling}>
						<ExpenseCardButtons />
						<ExpenseCardAmount />
					</Box>
				</Stack>
			</CardWrapper>
		</ExpenseCardContextProvider>
	);
}

export default ExpenseCard;
