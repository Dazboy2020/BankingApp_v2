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
	bgcolor: '#f70776',
	color: 'white',
	mt: 4,
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

	//! Add transaction
	async function handleSubmitExpense(e) {
		e.preventDefault();

		if (+expenseAmount <= 0 || '' || expenseCategory === '') return;
		dispatch({ type: 'addTransactionAnimate', payload: true });

		const month = new Date().toLocaleString('en-GB', { month: 'short' });
		const day = new Date().toLocaleString('en-GB', { day: '2-digit' });
		const year = new Date().getFullYear();

		const expenseDate = `${day}  ${month}  ${year}`;

		let expenseData;

		//* add expense //
		if (expenseType === 'expense') {
			const queryParams = `?_id=${state._id}`;
			expenseData = {
				id: window.crypto.randomUUID(),
				amount: -expenseAmount,
				date: expenseDate,
				category: expenseCategory,
			};

			console.log(expenseData);

			try {
				const response = await axios.post(
					`http://localhost:5000/addexpense${queryParams}`,
					expenseData
				);

				console.log('New expense added successfully:', response.data);
			} catch (error) {
				console.error('Error adding expense:', error);
			}
			dispatch({ type: 'add/expense', payload: expenseData });
		}

		//* add Deposit //
		if (expenseType === 'deposit') {
			const queryParams = `?_id=${state._id}`;

			expenseData = {
				id: window.crypto.randomUUID(),
				amount: +expenseAmount,
				date: expenseDate,
				category: expenseCategory,
			};

			try {
				const response = await axios.post(
					`http://localhost:5000/adddeposit${queryParams}`,
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
						Add Item
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default AddTransaction;
