import React from 'react';
import { useAppContext } from '../../context/context';
import { useTransactionContext } from '../../context/transactionContext';
import { useDarkMode } from '../../hooks/useDarkMode';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

import TransactionInputBox from './TransactionInputBox';
import useEditExpense from '../../hooks/useEditExpense';
import useEditDeposit from '../../hooks/useEditDeposit';
import useAddExpense from '../../hooks/useAddExpense';
import useAddDeposit from '../../hooks/useAddDeposit';
import ButtonContainer from './ButtonContainer';
import dayjs from 'dayjs';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

const AddTransaction = () => {
	const { state, dispatch } = useAppContext();

	const {
		expenseAmount,
		setExpenseAmount,
		expenseCategory,
		setExpenseCategory,
		expenseType,
		pickerDate,
		setPickerDate,
	} = useTransactionContext();

	const { editExpense } = useEditExpense();
	const { editDeposit } = useEditDeposit();
	const { addExpense } = useAddExpense();
	const { addDeposit } = useAddDeposit();

	const { isDarkMode } = useDarkMode();

	const expenseEditMode = state.isEditing ? '1px solid #f97316' : '';

	function handleCancelEdit() {
		dispatch({ type: 'edit/cancel' });
		setExpenseAmount('');
		setExpenseCategory('');
		setPickerDate(null);
	}

	//! Add transaction
	async function handleSubmitExpense(e) {
		e.preventDefault();

		if (+expenseAmount <= 0 || '' || expenseCategory === '') return;

		if (dayjs(pickerDate).isValid() === false) return;

		let expenseData;

		const formatDateToString = (date) => {
			return date ? dayjs(date).format('DD MMM YYYY') : ''; // Check if date is defined
		};

		const formattedDate = formatDateToString(pickerDate);

		//! Edit Expense //
		if (state.isEditing && expenseType === 'expense') {
			editExpense(expenseAmount, expenseCategory, expenseData, formattedDate);
		}

		//! edit deposit //
		if (expenseType === 'deposit' && state.isEditing) {
			editDeposit(expenseData, expenseAmount, expenseCategory, formattedDate);
		}

		//! add expense //
		if (expenseType === 'expense' && state.isEditing === false) {
			addExpense(expenseData, expenseAmount, formattedDate, expenseCategory);
		}

		//! add Deposit //
		if (expenseType === 'deposit' && state.isEditing === false) {
			addDeposit(expenseData, expenseAmount, expenseCategory, formattedDate);
		}

		setExpenseAmount('');
		setExpenseCategory('');
		setPickerDate(null);
	}

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: 2,
				alignItems: 'flex-start',
				border: expenseEditMode,
				borderRadius: '10px',
			}}
		>
			<CardContent
				sx={{
					width: '100%',
					p: 1,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
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
					<PointOfSaleIcon
						sx={{ color: 'green', fontSize: { xs: '50px', sm: '60px' } }}
					/>
				</Box>

				<TransactionInputBox />
				<ButtonContainer
					handleCancelEdit={handleCancelEdit}
					handleSubmitExpense={handleSubmitExpense}
				/>
			</CardContent>
		</Card>
	);
};

export default AddTransaction;
