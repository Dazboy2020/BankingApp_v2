import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/context';
import { CssBaseline } from '@mui/material';
import { DarkModeProvider } from './hooks/useDarkMode';
import { TransactionProvider } from './context/transactionContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ContextProvider>
			<TransactionProvider>
				<DarkModeProvider>
					<CssBaseline />
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<App />
					</LocalizationProvider>
				</DarkModeProvider>
			</TransactionProvider>
		</ContextProvider>
	</React.StrictMode>
);
