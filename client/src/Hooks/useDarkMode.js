import { createContext, useContext } from 'react';
import { useLocalStorageState } from './useLocalStorage';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode');

	function toggleDarkMode() {
		setIsDarkMode((isDark) => !isDark);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);

	if (context === undefined)
		throw new Error('Dark mode context used outside provider');

	return context;
}

export { DarkModeProvider, useDarkMode };
