import React, { useEffect } from 'react';
import { useAppContext } from '../../context/context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import axios from 'axios';

const buttonStyles = {
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},
	color: 'white',
	mt: 4,
	mr: 2,
	fontSize: '1.2rem',
	paddingRight: '.8rem',
};

const menuExpense = [
	{
		value: 'utilities',
		label: 'utilities',
	},
	{
		value: 'leisure',
		label: 'leisure',
	},
	{
		value: 'food',
		label: 'food',
	},
	{
		value: 'travel',
		label: 'travel',
	},
	{
		value: 'debt',
		label: 'debt',
	},
];

const menuDeposit = [
	{
		value: 'salary',
		label: 'salary',
	},
	{
		value: 'shares',
		label: 'shares',
	},
	{
		value: 'sales',
		label: 'sales',
	},
	{
		value: 'other',
		label: 'other',
	},
];

const AddTransaction = () => {
	const { setOpenToast, dispatch, message, setMessage, state } =
		useAppContext();
	const [expenseAmount, setExpenseAmount] = useState('');
	const [expenseType, setExpenseType] = useState('expense');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [label, setLabel] = useState('');

	const expenseEditMode = state.isEditing ? '1px solid purple' : '';

	function handleReturn(e) {
		e.preventDefault();
		return;
	}

	function handleExpenseAmount(e) {
		setExpenseAmount(e.target.value);
	}

	//! set expense type //
	useEffect(
		function () {
			if (state.isActive === 1) {
				setExpenseType('expense');
				setLabel('expense');
				setExpenseCategory('');
			}
			if (state.isActive === 2) {
				setExpenseType('deposit');
				setLabel('deposit');
				setExpenseCategory('');
			}
		},
		[expenseType, state.isActive]
	);

	//! Clear animation
	useEffect(() => {
		const intervalDuration = 3000;

		const intervalId = setInterval(() => {
			dispatch({ type: 'addTransactionAnimate', payload: false });
		}, intervalDuration);

		return () => {
			clearInterval(intervalId);
		};
	}, [setExpenseAmount, dispatch]);

	function handleExpenseCategory(e) {
		setExpenseCategory(e.target.value);
		setMessage('');
	}

	function handleCancelEdit() {
		dispatch({ type: 'edit/cancel' });
		dispatch({ type: 'addTransactionAnimate', payload: true });
	}

	//! Add transaction
	async function handleSubmitExpense(e) {
		e.preventDefault();

		const BASE_URL = 'http://localhost:5000';

		if (+expenseAmount <= 0 || '' || expenseCategory === '') return;
		dispatch({ type: 'addTransactionAnimate', payload: true });

		const month = new Date().toLocaleString('en-GB', { month: 'short' });
		const day = new Date().toLocaleString('en-GB', { day: '2-digit' });
		const year = new Date().getFullYear();

		const expenseDate = `${day}  ${month}  ${year}`;

		let expenseData;

		//! Edit Expense //
		if (state.isEditing && expenseType === 'expense') {
			expenseData = {
				id: state.editingExpense[0].id,
				amount: -expenseAmount,
				category: expenseCategory,
				date: state.editingExpense[0].date,
			};

			const userId = state._id;
			const expenseId = expenseData.id;

			try {
				const response = await axios.put(
					`${BASE_URL}/editexpense/${userId}/${expenseId}`,
					expenseData
				);
				console.log('Expense updated successfully:', response.data);
			} catch (error) {
				console.error('Error updating expense:', error);
			}

			dispatch({
				type: 'add/editedExpense',
				payload: { id: expenseData.id, expenseData },
			});
		}

		//* edit deposit //
		if (expenseType === 'deposit' && state.isEditing) {
			expenseData = {
				id: state.editingDeposit[0].id,
				amount: +expenseAmount,
				category: expenseCategory,
				date: state.editingDeposit[0].date,
			};

			const userId = state._id;
			const expenseId = expenseData.id;

			try {
				const response = await axios.put(
					`${BASE_URL}/editdeposit/${userId}/${expenseId}`,
					expenseData
				);
				console.log('Expense updated successfully:', response.data);
			} catch (error) {
				console.error('Error updating expense:', error);
			}

			dispatch({
				type: 'add/editedDeposit',
				payload: { id: expenseData.id, expenseData },
			});
		}

		//* add expense //
		if (expenseType === 'expense' && state.isEditing === false) {
			const queryParams = `?_id=${state._id}`;
			expenseData = {
				id: window.crypto.randomUUID(),
				amount: -expenseAmount,
				date: expenseDate,
				category: expenseCategory,
			};

			try {
				const response = await axios.post(
					`${BASE_URL}/addexpense${queryParams}`,
					expenseData
				);

				console.log('New expense added successfully:', response.data);
			} catch (error) {
				console.error('Error adding expense:', error);
			}
			dispatch({ type: 'add/expense', payload: expenseData });
		}

		//* add Deposit //
		if (expenseType === 'deposit' && state.isEditing === false) {
			const queryParams = `?_id=${state._id}`;

			expenseData = {
				id: window.crypto.randomUUID(),
				amount: +expenseAmount,
				date: expenseDate,
				category: expenseCategory,
			};

			try {
				const response = await axios.post(
					`${BASE_URL}/adddeposit${queryParams}`,
					expenseData
				);

				console.log('Deposit added successfully:', response.data);
			} catch (error) {
				console.error('Error adding expense:', error);
			}

			dispatch({ type: 'add/deposit', payload: expenseData });
		}

		setMessage(
			expenseType === 'expense' ? 'Expense Item Added' : 'New Deposit Added'
		);

		setExpenseAmount('');
		setOpenToast(true, { message: message });
		setExpenseCategory('');
	}

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
						color="#242a2e"
						sx={{ mb: 2, fontWeight: 'bold' }}
					>
						{!state.isEditing ? 'Add a Transaction:' : 'Edit Mode'}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
					}}
				>
					<Stack
						direction={{ md: 'column', lg: 'row' }}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						{/* //! Amount */}
						<Box
							sx={{
								'& .MuiTextField-root': { m: 1, width: '20ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<form component="form" onSubmit={handleReturn}>
								<TextField
									onChange={handleExpenseAmount}
									id="outlined-select-currency"
									type="number"
									label="amount"
									value={expenseAmount}
									helperText="Select amount"
									color="secondary"
								></TextField>
							</form>
						</Box>

						{/*//! EXPENSE CATEGORY */}

						<Box
							component="form"
							sx={{
								'& .MuiTextField-root': { m: 1, width: '20ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								id="outlined-select-currency"
								select
								label="Select"
								value={expenseCategory}
								helperText="Category"
								color="secondary"
								onChange={handleExpenseCategory}
							>
								{label === 'expense'
									? menuExpense.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
									  ))
									: menuDeposit.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
									  ))}
							</TextField>
						</Box>
					</Stack>
				</Box>
				<Box>
					<Button
						variant="contained"
						startIcon={<AddIcon color="white" sx={{ ml: 1 }} />}
						sx={buttonStyles}
						onClick={handleSubmitExpense}
					>
						{!state.isEditing ? 'Add Item' : 'Edit Item'}
					</Button>
					{state.isEditing && (
						<Button
							variant="contained"
							startIcon={<AddIcon color="white" sx={{ ml: 1 }} />}
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
