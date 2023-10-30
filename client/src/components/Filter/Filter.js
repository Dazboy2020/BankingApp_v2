import React, { useEffect } from 'react';
import { useAppContext } from '../../context/context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';

const FilterItems = () => {
	const { dispatch, state } = useAppContext();
	const [expenseType, setExpenseType] = useState('expense');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [label, setLabel] = useState('');

	const expenseLabelsInitial = state.expenses
		.filter((expense) => expense.category)
		.map((ex) => ex.category);

	expenseLabelsInitial.unshift('All Expenses');

	const depositLabelInitial = state.deposits
		.filter((deposit) => deposit.category)
		.map((dep) => dep.category);

	depositLabelInitial.unshift('All Deposits');

	const expenseLabels = [...new Set(expenseLabelsInitial)];
	const depositLabels = [...new Set(depositLabelInitial)];

	//! set expense type //
	useEffect(
		function () {
			if (state.isActive === 1) {
				setExpenseType('expense');
				setLabel('expense');

				dispatch({ type: 'user/filteredExpenses', payload: expenseCategory });
			}
			if (state.isActive === 2) {
				setExpenseType('deposit');
				setLabel('deposit');

				dispatch({ type: 'user/filteredDeposits', payload: expenseCategory });
			}
		},
		[expenseType, state.isActive, dispatch, expenseCategory]
	);

	//! Clear animation
	//deleted as moved to custom hook

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
					flexDirection: { xs: 'column', sm: 'row' },
					alignItems: { xs: 'flex-start', sm: 'center' },
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
								'& .MuiTextField-root': {
									m: 1,
									width: { xs: '20ch', s: '30ch', md: '30ch' },
								},
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
									? expenseLabels.map((option) => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
									  ))
									: depositLabels.map((option) => (
											<MenuItem
												key={Math.random().toLocaleString()}
												value={option}
											>
												{option}
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
