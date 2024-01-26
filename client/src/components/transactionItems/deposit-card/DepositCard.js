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
				<DepositCardTitle />
				<DepositCardDate />
				<DepositCardCategory />

				<Box sx={styling}>
					<DepositCardButtons />
					<DepositCardAmount />
				</Box>
			</CardWrapper>
		</DepositCardContextProvider>
	);
}

export default DepositCard;
