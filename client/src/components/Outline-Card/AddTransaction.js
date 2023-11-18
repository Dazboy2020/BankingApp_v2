import React from 'react';
import { useAppContext } from '../../context/context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Button } from '@mui/material';

import { useDarkMode } from '../../Hooks/useDarkMode';
import TransactionInputBox from './TransactionInputBox';
import { useTransactionContext } from '../../context/transactionContext';
import useEditExpense from '../../Hooks/useEditExpense';
import useEditDeposit from '../../Hooks/useEditDeposit';
import useAddExpense from '../../Hooks/useAddExpense';
import useAddDeposit from '../../Hooks/useAddDeposit';

const AddTransaction = () => {
	const { setMessage, state, dispatch, setOpenToast, message } =
		useAppContext();

	const {
		expenseAmount,
		setExpenseAmount,
		expenseCategory,
		setExpenseCategory,
		expenseType,
	} = useTransactionContext();

	const { editExpense } = useEditExpense();
	const { editDeposit } = useEditDeposit();
	const { addExpense } = useAddExpense();
	const { addDeposit } = useAddDeposit();

	const { isDarkMode } = useDarkMode();

	const expenseEditMode = state.isEditing ? '1px solid purple' : '';

	function handleCancelEdit() {
		dispatch({ type: 'edit/cancel' });
		dispatch({ type: 'addTransactionAnimate', payload: true });
	}

	//! Add transaction
	async function handleSubmitExpense(e) {
		e.preventDefault();
		console.log('click');

		if (+expenseAmount <= 0 || '' || expenseCategory === '') return;

		dispatch({ type: 'addTransactionAnimate', payload: true });

		const month = new Date().toLocaleString('en-GB', { month: 'short' });
		const day = new Date().toLocaleString('en-GB', { day: '2-digit' });
		const year = new Date().getFullYear();

		const expenseDate = `${day}  ${month}  ${year}`;

		let expenseData;

		//! Edit Expense //
		if (state.isEditing && expenseType === 'expense') {
			editExpense(expenseAmount, expenseCategory, expenseData);
		}

		//! edit deposit //
		if (expenseType === 'deposit' && state.isEditing) {
			editDeposit(expenseData, expenseAmount, expenseCategory);
		}

		//! add expense //
		if (expenseType === 'expense' && state.isEditing === false) {
			console.log(expenseAmount, expenseCategory, expenseData);

			addExpense(expenseData, expenseAmount, expenseDate, expenseCategory);
		}

		//! add Deposit //
		if (expenseType === 'deposit' && state.isEditing === false) {
			addDeposit(expenseData, expenseAmount, expenseCategory, expenseDate);
		}

		setMessage(
			expenseType === 'expense' ? 'Expense Item Added' : 'New Deposit Added'
		);

		setExpenseAmount('');
		setOpenToast(true, { message: message });
		setExpenseCategory('');
	}

	const buttonStyles = {
		'&:hover': {
			backgroundColor: '#680747',
			cursor: 'default',
		},
		color: 'white',
		letterSpacing: '.1rem',
		mt: 4,
		mr: 2,
		fontSize: '1.1rem',
		paddingRight: '.8rem',
	};

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				mb: 2,
				alignItems: 'flex-start',
				border: expenseEditMode,
				borderRadius: '10px',
			}}
		>
			<CardContent sx={{ width: '100%' }}>
				<Box>
					<Typography
						variant="h5"
						sx={{
							mb: 2,
							fontWeight: 'bold',
							color: isDarkMode ? '#d6d3d1' : '#000',
						}}
					>
						{!state.isEditing ? 'Add a Transaction:' : 'Edit Mode'}
					</Typography>
				</Box>

				<TransactionInputBox />
				<Box>
					<Button
						variant="contained"
						sx={buttonStyles}
						onClick={handleSubmitExpense}
					>
						{!state.isEditing ? 'Add item +' : 'Edit'}
					</Button>
					{state.isEditing && (
						<Button
							variant="contained"
							sx={buttonStyles}
							onClick={handleCancelEdit}
						>
							Cancel
						</Button>
					)}
				</Box>
			</CardContent>
		</Card>
	);
};

export default AddTransaction;
