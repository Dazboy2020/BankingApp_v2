import { createContext, useContext } from 'react';

const ExpenseCardContext = createContext();

function ExpenseCardContextProvider({ children, expense }) {
	return (
		<ExpenseCardContext.Provider value={{ expense }}>
			{children}
		</ExpenseCardContext.Provider>
	);
}

function useExpenseCardContext() {
	const context = useContext(ExpenseCardContext);

	if (context === undefined) throw new Error(Error);
	return context;
}

export { ExpenseCardContextProvider, useExpenseCardContext };
