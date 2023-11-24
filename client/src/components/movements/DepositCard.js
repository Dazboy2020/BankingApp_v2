import React from 'react';
import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import { Box } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useAppContext } from '../../context/context';

import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import { useDarkMode } from '../../hooks/useDarkMode';

function DepositCard({ deposit }) {
	const { state } = useAppContext();
	const { isDarkMode } = useDarkMode();

	const depositEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<Paper
			className={classes.movements}
			sx={{
				border: state.isEditing ? '1px solid #f97316' : '',
				borderRadius: '10px',
			}}
		>
			<Stack component="section" className={depositEditMode}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<span className={classes.movements__type}>Income</span>
					<NorthEastIcon sx={{ fontSize: '40px', color: 'green' }} />
				</Box>
				<span
					className={
						isDarkMode ? classes.movements__date__dark : classes.movements__date
					}
				>
					{deposit.date}
				</span>
				<span
					className={
						isDarkMode
							? classes.movements__category__dark
							: classes.movements__category
					}
				>
					{deposit.category}
				</span>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
					}}
				>
					<Box sx={{ mt: '2rem' }}>
						{state.isActive !== 0 && !state.isEditing && (
							<EditButton expense={deposit.id} type="deposit" />
						)}
						{state.isActive !== 0 && <DeleteButton expense={deposit.id} />}
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<span
							className={
								isDarkMode
									? classes.movements__value__dark
									: classes.movements__value
							}
						>
							€{deposit.amount}
						</span>
					</Box>
				</Box>
			</Stack>
		</Paper>
	);
}

export default DepositCard;
