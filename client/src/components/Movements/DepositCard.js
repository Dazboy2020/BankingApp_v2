import React from 'react';
import Button from '@mui/material/Button';
import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useAppContext } from '../../context/context';

import axios from 'axios';

const buttonStyles = {
	color: 'white',
	fontSize: '1.1rem',
	letterSpacing: '.1rem',
	paddingRight: '.8rem',
	mr: '10px',
	fontWeight: '500',
	mt: '.3rem',
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},
};

function DepositCard({ deposit }) {
	const { setOpenToast, dispatch, message, setMessage, state } =
		useAppContext();

	//! Edit an Item
	function handleEditClick(id) {
		let depositToEdit = state.deposits.filter((deposit) => deposit.id === id);

		dispatch({ type: 'edit/deposit', payload: depositToEdit });
		// dispatch({ type: 'addTransactionAnimate', payload: true });
	}

	//! Delete an Item //

	async function handleDelete(id) {
		let userId = state._id;
		console.log(userId, id);

		try {
			await axios.delete(`http://localhost:5000/deletedeposit/${userId}/${id}`);
			console.log('Deposit deleted successfully');
		} catch (error) {
			console.error('Error deleting deposit:', error);
		}

		dispatch({ type: 'addTransactionAnimate', payload: true });
		dispatch({ type: 'delete/deposit', payload: id });

		setMessage('Deposit item deleted!');
		setOpenToast(true, { message: message });
	}

	const depositEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<Paper
			className={classes.movements}
			sx={{
				border: state.isEditing ? '1px solid purple' : '',
				borderRadius: '10px',
			}}
		>
			<Stack component="section" className={depositEditMode}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<span className={classes.movements__type__deposit}>Income</span>
					<NorthEastIcon sx={{ fontSize: '40px', color: 'green' }} />
				</Box>
				<span className={classes.movements__date}>{deposit.date}</span>
				<span className={classes.movements__category}>{deposit.category}</span>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
					}}
				>
					<Box sx={{ mt: '2rem' }}>
						{state.isActive !== 0 && (
							<Button
								sx={buttonStyles}
								variant="contained"
								onClick={() => handleEditClick(deposit.id)}
								startIcon={
									<CreateIcon
										sx={{
											color: 'white',
											mr: '2px',
										}}
									/>
								}
							>
								Edit
							</Button>
						)}
						<Button
							variant="contained"
							sx={buttonStyles}
							onClick={() => handleDelete(deposit.id)}
							startIcon={
								<DeleteIcon
									sx={{
										color: 'white',
										mr: '2px',
									}}
								/>
							}
						>
							Delete
						</Button>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<span className={classes.movements__value}>€{deposit.amount}</span>
					</Box>
				</Box>
			</Stack>
		</Paper>
	);
}

export default DepositCard;
