import { createContext, useContext } from 'react';

const DepositCardContext = createContext();

function DepositCardContextProvider({ children, deposit }) {
	return (
		<DepositCardContext.Provider value={{ deposit }}>
			{children}
		</DepositCardContext.Provider>
	);
}

function useDepositCardContext() {
	const context = useContext(DepositCardContext);

	if (context === undefined) throw new Error(Error);
	return context;
}

export { DepositCardContextProvider, useDepositCardContext };
