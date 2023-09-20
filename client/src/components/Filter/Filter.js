import React, { useEffect } from 'react';
import { useAppContext } from '../../context/context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';

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

const FilterItems = () => {
	const { dispatch, state } = useAppContext();
	const [expenseType, setExpenseType] = useState('expense');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [label, setLabel] = useState('');

	//! set expense type //
	useEffect(
		function () {
			if (state.isActive === 1) {
				setExpenseType('expense');
				setLabel('expense');

				dispatch({ type: 'user/filteredExpenses', payload: expenseCategory });

				// setExpenseCategory('');
			}
			if (state.isActive === 2) {
				setExpenseType('deposit');
				setLabel('deposit');

				dispatch({ type: 'user/filteredDeposits', payload: expenseCategory });

				// setExpenseCategory('');
			}
		},
		[expenseType, state.isActive, dispatch, expenseCategory]
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
	}, [setExpenseCategory, dispatch]);

	function handleExpenseCategory(e) {
		setExpenseCategory(e.target.value);
		dispatch({ type: 'addTransactionAnimate', payload: true });
	}

	//! Add transaction

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				mb: 2,
				alignItems: 'flex-start',
				borderRadius: '10px',
			}}
		>
			<CardContent
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						fontWeight: 500,
						width: '15rem',
						marginBottom: '0.1rem',
					}}
				>
					<Typography sx={{ fontFamily: 'poppins', fontSize: '1.3rem' }}>
						Filter Items:
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
			</CardContent>
		</Card>
	);
};

export default FilterItems;
