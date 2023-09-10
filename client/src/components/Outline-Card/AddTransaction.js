import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useAppContext } from '../../context/context';

import axios from 'axios';

const menuType = [
	{
		value: 'deposit',
		label: 'deposit',
	},
	{
		value: 'expense',
		label: 'expense',
	},
];
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
	const { setOpenToast, state, dispatch, message, setMessage } =
		useAppContext();
	const [expenseAmount, setExpenseAmount] = useState('');
	const [expenseType, setExpenseType] = useState('expense');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [label, setLabel] = useState('');
	// const [message, setMessage] = useState('');

	const updatedDeposits = state.deposits;
	const updatedExpenses = state.expenses;

	function handleReturn(e) {
		e.preventDefault();
		return;
	}

	function handleExpenseAmount(e) {
		setExpenseAmount(e.target.value);
	}

	function handleExpenseType(e) {
		setExpenseType(e.target.value);
	}

	useEffect(
		function () {
			if (expenseType === 'expense') {
				setLabel('expense');
				setExpenseCategory('');
			}
			if (expenseType === 'deposit') {
				setLabel('deposit');
				setExpenseCategory('');
			}
		},
		[expenseType]
	);

	function handleExpenseCategory(e) {
		setExpenseCategory(e.target.value);
		setMessage('');
	}

	async function handleSubmitExpense(e) {
		e.preventDefault();

		if (+expenseAmount <= 0 || '' || expenseCategory === '') return;

		const month = new Date().toLocaleString('en-GB', { month: 'short' });
		const day = new Date().toLocaleString('en-GB', { day: '2-digit' });
		const year = new Date().getFullYear();

		const expenseDate = `${day}  ${month}  ${year}`;

		if (expenseType === 'deposit' && expenseAmount > 0) {
			updatedDeposits.unshift([+expenseAmount, expenseDate, expenseCategory]);
		}

		if (expenseType === 'expense' && expenseAmount > 0) {
			updatedExpenses.unshift([-expenseAmount, expenseDate, expenseCategory]);
		}

		let expenseData;

		if (expenseType === 'expense') {
			expenseData = {
				_id: state.ID,
				expenses: updatedExpenses,
			};

			try {
				const response = await axios.post(
					'http://localhost:5000/addexpense',
					expenseData
				);

				console.log('Expense added successfully:', response.data);
			} catch (error) {
				console.error('Error adding expense:', error);
			}
		}

		if (expenseType === 'deposit') {
			expenseData = {
				_id: state.ID,
				deposits: updatedDeposits,
			};

			try {
				const response = await axios.post(
					'http://localhost:5000/adddeposit',
					expenseData
				);

				console.log('Expense added successfully:', response.data);
			} catch (error) {
				console.error('Error adding expense:', error);
			}
		}

		console.log(expenseData);

		setMessage(
			expenseType === 'expense' ? 'Expense Item Added' : 'New Deposit Added'
		);

		expenseType === 'expense'
			? dispatch({ type: 'add/expense', payload: updatedExpenses })
			: dispatch({ type: 'add/deposit', payload: updatedDeposits });

		setExpenseAmount('');
		setOpenToast(true, { message: message });
		setExpenseCategory('');
	}

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				// flexGrow: 1,
				mb: 0.5,
				alignItems: 'flex-start',
			}}
		>
			<CardContent sx={{ width: '100%' }}>
				<Box>
					<Typography
						variant="h5"
						color="#242a2e"
						sx={{ mb: 2, fontWeight: 'bold' }}
					>
						Add a Transaction:
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
								'& .MuiTextField-root': { m: 1, width: '25ch' },
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
						{/* {//! TYPE */}

						<Box
							component="form"
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								id="outlined-select-currency"
								select
								label="Select"
								value={expenseType}
								helperText="Type"
								onChange={handleExpenseType}
								color="secondary"
							>
								{menuType.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>

						{/*//! EXPENSE CATEGORY */}

						<Box
							component="form"
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
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
						startIcon={<AddIcon color="white" sx={{ ml: 1 }} />}
						sx={{
							'&:hover': {
								backgroundColor: '#680747',
								cursor: 'default',
							},
							bgcolor: '#f70776',
							color: 'white',
							mt: 4,
							fontSize: '1.2rem',
							paddingRight: '.8rem',
						}}
						onClick={handleSubmitExpense}
					>
						Add Item
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default AddTransaction;
