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
				<ExpenseCardTitle />
				<ExpenseCardDate />
				<ExpenseCardCategory />

				<Box sx={styling}>
					<ExpenseCardButtons />
					<ExpenseCardAmount />
				</Box>
			</CardWrapper>
		</ExpenseCardContextProvider>
	);
}

export default ExpenseCard;
