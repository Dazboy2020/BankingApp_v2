import { createContext, useContext, useState } from 'react';

const TransactionContext = createContext();

function TransactionProvider({ children }) {
	const [expenseAmount, setExpenseAmount] = useState('');
	const [expenseCategory, setExpenseCategory] = useState('');
	const [expenseType, setExpenseType] = useState('');

	return (
		<TransactionContext.Provider
			value={{
				expenseAmount,
				setExpenseAmount,
				expenseCategory,
				setExpenseCategory,
				expenseType,
				setExpenseType,
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
