import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useAppContext } from '../../context/context';

import axios from 'axios';

const Movements = () => {
	const { setOpenToast, dispatch, message, setMessage, state } =
		useAppContext();

	//! Clear animation
	useEffect(() => {
		const intervalDuration = 2000;

		const intervalId = setInterval(() => {
			dispatch({ type: 'addTransactionAnimate', payload: false });
		}, intervalDuration);

		return () => {
			clearInterval(intervalId);
		};
	}, [dispatch]);

	const movementsToDisplay = state.isEditing
		? state.editingDeposit
		: state.deposits;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	const depositEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	//! Edit an Item
	function handleEditClick(id) {
		let depositToEdit = state.deposits.filter((deposit) => deposit.id === id);

		dispatch({ type: 'edit/deposit', payload: depositToEdit });
	}

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

	const buttonStyles = {
		// bgcolor: '#f70776',
		color: 'white',
		fontSize: '1rem',
		paddingRight: '.8rem',
		mr: '10px',
		fontWeight: '500',
		mt: '.3rem',
		'&:hover': {
			backgroundColor: '#680747',
			cursor: 'default',
		},
	};

	return (
		<ul className={animate}>
			{moves.map((item) => (
				<Paper
					// key={Math.floor(Math.random() * 10000) + 1}
					key={item.id}
					className={classes.movements}
				>
					<Stack component="section" className={depositEditMode}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<span className={classes.movements__type__deposit}>Income</span>
							<NorthEastIcon sx={{ fontSize: '40px', color: 'green' }} />
						</Box>
						<span className={classes.movements__date}>{item.date}</span>
						<span className={classes.movements__category}>{item.category}</span>
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
										onClick={() => handleEditClick(item.id)}
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
									onClick={() => handleDelete(item.id)}
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
								<span className={classes.movements__value}>€{item.amount}</span>
							</Box>
						</Box>
					</Stack>
				</Paper>
			))}
		</ul>
	);
};

export default Movements;
