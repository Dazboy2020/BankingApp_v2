import React, { useEffect } from 'react';
import { useAppContext } from '../../context/context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';

import useClearAnimation from '../../Hooks/useClearAnimation';
import useEditExpense from '../../Hooks/useEditExpense';
import useEditDeposit from '../../Hooks/useEditDeposit';
import useAddExpense from '../../Hooks/useAddExpense';
import useAddDeposit from '../../Hooks/useAddDeposit';

const buttonStyles = {
	'&:hover': {
		backgroundColor: '#680747',
		cursor: 'default',
	},
	color: 'white',
	letterSpacing: '.1rem',
	mt: 4,
	mr: 2,
	fontSize: '1.2rem',
	paddingRight: '.8rem',
};

const menuExpenseItems = [
	{
		value: 'Utilities',
		label: 'Utilities',
	},
	{
		value: 'Leisure',
		label: 'Leisure',
	},
	{
		value: 'Food',
		label: 'Food',
	},
	{
		value: 'Travel',
		label: 'Travel',
	},
	{
		value: 'Debt',
		label: 'Debt',
	},
];

const menuDepositItems = [
	{
		value: 'Salary',
		label: 'Salary',
	},
	{
		value: 'Shares',
		label: 'Shares',
	},
	{
		value: 'Sales',
		label: 'Sales',
	},
	{
		value: 'Other',
		label: 'Other',
	},
];

const AddTransaction = () => {
	const { setOpenToast, dispatch, message, setMessage, state } =
		useAppContext();

	const { editExpense } = useEditExpense();
	const { editDeposit } = useEditDeposit();
	const { addExpense } = useAddExpense();
	const { addDeposit } = useAddDeposit();
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
	useClearAnimation();

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
									? menuExpenseItems.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
									  ))
									: menuDepositItems.map((option) => (
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
						sx={buttonStyles}
						onClick={handleSubmitExpense}
					>
						{!state.isEditing ? 'Add Item' : 'Edit Item'}
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
