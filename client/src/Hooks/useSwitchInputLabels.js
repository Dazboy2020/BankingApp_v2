import { useEffect } from 'react';
import { useAppContext } from '../context/context';
import { useTransactionContext } from '../context/transactionContext';

export default function useSwitchInputLabel() {
	const { state } = useAppContext();
	const { setLabel, setExpenseCategory, setExpenseType, setExpenseAmount } =
		useTransactionContext();

	useEffect(
		function () {
			if (state.isActive === 1) {
				setLabel('expense');
				setExpenseCategory('');
				setExpenseType('expense');
				setExpenseAmount('');
			}
			if (state.isActive === 2) {
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
			state.isActive,
		]
	);
}
