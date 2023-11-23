import React from 'react';
import { useAppContext } from '../../context/context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

import { useDarkMode } from '../../Hooks/useDarkMode';
import TransactionInputBox from './TransactionInputBox';
import { useTransactionContext } from '../../context/transactionContext';
import useEditExpense from '../../Hooks/useEditExpense';
import useEditDeposit from '../../Hooks/useEditDeposit';
import useAddExpense from '../../Hooks/useAddExpense';
import useAddDeposit from '../../Hooks/useAddDeposit';
import ButtonContainer from './ButtonContainer';
import dayjs from 'dayjs';

const AddTransaction = () => {
	const { setMessage, state, dispatch, setOpenToast, message } =
		useAppContext();

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
			editExpense(expenseAmount, expenseCategory, expenseData);
		}

		//! edit deposit //
		if (expenseType === 'deposit' && state.isEditing) {
			editDeposit(expenseData, expenseAmount, expenseCategory);
		}

		//! add expense //
		if (expenseType === 'expense' && state.isEditing === false) {
			addExpense(expenseData, expenseAmount, formattedDate, expenseCategory);
		}

		//! add Deposit //
		if (expenseType === 'deposit' && state.isEditing === false) {
			addDeposit(expenseData, expenseAmount, expenseCategory, formattedDate);
		}

		setMessage(
			expenseType === 'expense' ? 'Expense Item Added' : 'New Deposit Added'
		);

		setExpenseAmount('');
		setOpenToast(true, { message: message });
		setExpenseCategory('');
		setPickerDate(null);
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
				// width: '30rem',
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
				<ButtonContainer
					handleCancelEdit={handleCancelEdit}
					handleSubmitExpense={handleSubmitExpense}
				/>
			</CardContent>
		</Card>
	);
};

export default AddTransaction;
