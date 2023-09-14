import { Paper, Stack } from '@mui/material';
import classes from './Movements.module.css';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';
import { useEffect } from 'react';

import axios from 'axios';

const MovementsExpenses = () => {
	const { setOpenToast, dispatch, message, setMessage, state } =
		useAppContext();

	//! Clear animation
	useEffect(() => {
		const intervalDuration = 3000;

		const intervalId = setInterval(() => {
			dispatch({ type: 'addTransactionAnimate', payload: false });
		}, intervalDuration);

		return () => {
			clearInterval(intervalId);
		};
	}, [dispatch]);

	const movementsToDisplay = state.isEditing
		? state.editingExpense
		: state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	const expenseEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	//! Edit an Item
	function handleEditClick(id) {
		let expenseToEdit = state.expenses.filter((ex) => ex.id === id);

		dispatch({ type: 'edit/expense', payload: expenseToEdit });

		console.log(expenseToEdit[0].id);
	}

	//! Delete an Item
	async function handleDelete(id) {
		let userId = state._id;
		console.log(userId, id);
		setMessage('');

		try {
			await axios.delete(`http://localhost:5000/deleteexpense/${userId}/${id}`);
			console.log('Expense deleted successfully');
		} catch (error) {
			console.error('Error deleting expense:', error);
		}

		dispatch({ type: 'addTransactionAnimate', payload: true });
		dispatch({ type: 'delete/expense', payload: id });

		setMessage('Expense item deleted!');
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
					<Stack component="section" className={expenseEditMode}>
						<span className={classes.movements__type__expense}>Expense</span>
						<span className={classes.movements__date}>{item.date}</span>
						<span className={classes.movements__category}>{item.category}</span>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'space-between',
								alignContent: 'center',
								justifyContent: 'center',
							}}
						>
							<Box sx={{ mt: '2rem' }}>
								{state.isActive !== 0 && (
									<Button
										variant="contained"
										sx={buttonStyles}
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
							<span className={classes.movements__value}>€{item.amount}</span>
						</Box>
					</Stack>
				</Paper>
			))}
		</ul>
	);
};

export default MovementsExpenses;
