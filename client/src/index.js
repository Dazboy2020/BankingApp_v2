import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/context';
import { CssBaseline } from '@mui/material';
import { DarkModeProvider } from './Hooks/useDarkMode';
import { TransactionProvider } from './context/transactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ContextProvider>
			<TransactionProvider>
				<DarkModeProvider>
					<CssBaseline />
					<App />
				</DarkModeProvider>
			</TransactionProvider>
		</ContextProvider>
	</React.StrictMode>
);
