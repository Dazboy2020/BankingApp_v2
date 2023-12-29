import { createContext, useContext, useState } from 'react';

const TransactionContext = createContext();

function TransactionProvider({ children }) {
	const [expenseAmount, setExpenseAmount] = useState('');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [expenseType, setExpenseType] = useState('');
	const [pickerDate, setPickerDate] = useState(null);
	const [label, setLabel] = useState('');
	const [budget, setBudget] = useState(null);

	return (
		<TransactionContext.Provider
			value={{
				expenseAmount,
				setExpenseAmount,
				expenseCategory,
				setExpenseCategory,
				expenseType,
				setExpenseType,
				pickerDate,
				setPickerDate,
				label,
				setLabel,
				budget,
				setBudget,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
}

function useTransactionContext() {
	const context = useContext(TransactionContext);

	if (context === undefined) throw new Error(Error);
	return context;
}

export { TransactionProvider, useTransactionContext };
