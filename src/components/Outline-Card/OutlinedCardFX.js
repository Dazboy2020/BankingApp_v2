import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

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

const BasicCardFX = ({
	accountMovements,
	setAccountMovements,
	setOpenToast,
}) => {
	const [expenseAmount, setExpenseAmount] = useState('');
	const [expenseType, setExpenseType] = useState('expense');
	const [fxTo, setFxTo] = useState('');

	const updatedDeposits = accountMovements[0].movements.map(
		(movement) => movement
	);
	const updatedExpenses = accountMovements[1].expenses.map(
		(movement) => movement
	);

	function handleReturn(e) {
		e.preventDefault();
		return;
	}

	function handleAmountFx(e) {
		setExpenseAmount(e.target.value);
	}

	function handleFxFrom(e) {
		setExpenseType(e.target.value);

		if (expenseType === '') {
			setFxTo('deposit');
		}
	}

	function handleFxSubmit(e) {
		e.preventDefault();
		console.log(updatedDeposits);
		console.log(updatedExpenses);
		if (+setExpenseAmount <= 0 || '') return;

		if (expenseType === 'deposit' && expenseAmount > 0) {
			updatedDeposits.unshift([
				+expenseAmount,
				new Date().toLocaleDateString(),
			]);
		}

		if (expenseType === 'expense' && expenseAmount > 0) {
			updatedExpenses.unshift([
				-expenseAmount,
				new Date().toLocaleDateString(),
			]);
		}

		let updatedAccount;
		expenseType === 'deposit'
			? (updatedAccount = [
					{
						...accountMovements[0],
						movements: updatedDeposits,
					},
					{
						...accountMovements[1],
						expenses: updatedExpenses,
					},
			  ])
			: (updatedAccount = [
					{
						...accountMovements[0],
						movements: updatedDeposits,
					},
					{
						...accountMovements[1],
						expenses: updatedExpenses,
					},
			  ]);

		console.log(updatedAccount);

		setAccountMovements(updatedAccount);
		setExpenseAmount('');
		setOpenToast(true);
	}

	return (
		<Card
			sx={{
				display: 'flex',
				flexGrow: 1,
				m: 1,
				alignItems: 'flex-start',
			}}
		>
			<CardContent>
				<Box>
					<Typography
						variant="h6"
						color="black"
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
									onChange={handleAmountFx}
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
								onChange={handleFxFrom}
								color="secondary"
							>
								{menuType.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>

						{/*//! To */}

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
								value={fxTo}
								helperText="To"
								color="secondary"
								disabled
							>
								{menuType.map((option) => (
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
								backgroundColor: 'black',
								cursor: 'default',
							},
							bgcolor: '#585054',
							color: 'white',
							mt: 4,
						}}
						onClick={handleFxSubmit}
					>
						Add Transaction
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default BasicCardFX;
