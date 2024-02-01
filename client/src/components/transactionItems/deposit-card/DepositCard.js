import React from 'react';
import { DepositCardContextProvider } from '../../../context/depositCardContext';
import { Box } from '@mui/material';

import CardWrapper from '../layout/CardWrapper';
import DepositCardTitle from './DepositCardTitle';
import DepositCardDate from './DepositCardDate';
import DepositCardCategory from './DepositCardCategory';
import DepositCardButtons from './DepositCardButtons';
import DepositCardAmount from './DepositCardAmount';

function DepositCard({ deposit }) {
	const styling = {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
	};

	return (
		<DepositCardContextProvider deposit={deposit}>
			<CardWrapper>
				<DepositCard.Title />
				<DepositCard.Date />
				<DepositCard.Category />

				<Box sx={styling}>
					<DepositCard.Buttons />
					<DepositCard.Amount />
				</Box>
			</CardWrapper>
		</DepositCardContextProvider>
	);
}

DepositCard.Title = DepositCardTitle;
DepositCard.Date = DepositCardDate;
DepositCard.Category = DepositCardCategory;
DepositCard.Buttons = DepositCardButtons;
DepositCard.Amount = DepositCardAmount;

export default DepositCard;
