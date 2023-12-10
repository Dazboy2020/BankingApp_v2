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
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId="841090446655-o7mj2dl8hvgrm3nrga63s5924f033oea.apps.googleusercontent.com">
				<ContextProvider>
					<TransactionProvider>
						<DarkModeProvider>
							<CssBaseline />
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<Routes>
									<Route path="/*" element={<App />} />
								</Routes>
							</LocalizationProvider>
						</DarkModeProvider>
					</TransactionProvider>
				</ContextProvider>
			</GoogleOAuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
