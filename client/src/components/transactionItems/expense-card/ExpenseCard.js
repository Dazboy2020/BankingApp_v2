import { ExpenseCardContextProvider } from '../../../context/expenseCardContext';
import { Box } from '@mui/material';

import React from 'react';
import ExpenseCardTitle from './ExpenseCardTitle';
import ExpenseCardDate from './ExpenseCardDate';
import ExpenseCardCategory from './ExpenseCardCategory';
import ExpenseCardButtons from './ExpenseCardButtons';
import ExpenseCardAmount from './ExpenseCardAmount';
import CardWrapper from '../layout/CardWrapper';

function ExpenseCard({ expense }) {
	const styling = {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
	};

	return (
		<ExpenseCardContextProvider expense={expense}>
			<CardWrapper>
				<ExpenseCard.Title />
				<ExpenseCard.Date />
				<ExpenseCard.Category />

				<Box sx={styling}>
					<ExpenseCard.Buttons />
					<ExpenseCard.Amount />
				</Box>
			</CardWrapper>
		</ExpenseCardContextProvider>
	);
}

ExpenseCard.Title = ExpenseCardTitle;
ExpenseCard.Date = ExpenseCardDate;
ExpenseCard.Category = ExpenseCardCategory;
ExpenseCard.Buttons = ExpenseCardButtons;
ExpenseCard.Amount = ExpenseCardAmount;

export default ExpenseCard;
