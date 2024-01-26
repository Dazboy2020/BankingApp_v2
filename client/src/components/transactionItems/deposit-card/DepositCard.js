import React from 'react';
import { useAppContext } from '../../../context/context';
import { DepositCardContextProvider } from '../../../context/depositCardContext';
import { Stack, Box } from '@mui/material';
import classes from '../layout/Movements.module.css';

import CardWrapper from '../layout/CardWrapper';
import DepositCardTitle from './DepositCardTitle';
import DepositCardDate from './DepositCardDate';
import DepositCardCategory from './DepositCardCategory';
import DepositCardButtons from './DepositCardButtons';
import DepositCardAmount from './DepositCardAmount';

function DepositCard({ deposit }) {
	const { state } = useAppContext();

	const depositEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	const styling = {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
	};

	return (
		<DepositCardContextProvider deposit={deposit}>
			<CardWrapper>
				<Stack component="section" className={depositEditMode}>
					<DepositCardTitle />
					<DepositCardDate />
					<DepositCardCategory />

					<Box sx={styling}>
						<DepositCardButtons />
						<DepositCardAmount />
					</Box>
				</Stack>
			</CardWrapper>
		</DepositCardContextProvider>
	);
}

export default DepositCard;
