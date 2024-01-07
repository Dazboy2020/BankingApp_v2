import { useEffect } from 'react';
import { useTransactionContext } from '../context/transactionContext';

export default function useSwitchInputLabel(expenseType) {
	const { setLabel, setExpenseCategory, setExpenseType, setExpenseAmount } =
		useTransactionContext();

	useEffect(
		function () {
			if (expenseType === 'expense') {
				setLabel('expense');
				setExpenseCategory('');
				setExpenseType('expense');
				setExpenseAmount('');
			}
			if (expenseType === 'deposit') {
				setLabel('deposit');
				setExpenseCategory('');
				setExpenseType('deposit');
				setExpenseAmount('');
			}
		},
		[
			setLabel,
			setExpenseAmount,
			setExpenseCategory,
			setExpenseType,
			expenseType,
		]
	);
}
