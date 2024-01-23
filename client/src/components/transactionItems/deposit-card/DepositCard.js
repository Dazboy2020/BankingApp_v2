import React from 'react';
import { useAppContext } from '../../../context/context';
import { Stack, Box } from '@mui/material';
import classes from '../Movements.module.css';

import CardWrapper from '../CardWrapper';
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
		<CardWrapper>
			<Stack component="section" className={depositEditMode}>
				<DepositCardTitle />
				<DepositCardDate deposit={deposit} />
				<DepositCardCategory deposit={deposit} />

				<Box sx={styling}>
					<DepositCardButtons deposit={deposit} />
					<DepositCardAmount deposit={deposit} />
				</Box>
			</Stack>
		</CardWrapper>
	);
}

export default DepositCard;
