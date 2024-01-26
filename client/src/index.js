import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context';
import { DarkModeProvider } from './hooks/useDarkMode';
import { TransactionProvider } from './context/transactionContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ModalContextProvider } from './context/modalContext';
import App from './App';
import { CssBaseline } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './index.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId={clientId}>
				<ContextProvider>
					<TransactionProvider>
						<ModalContextProvider>
							<DarkModeProvider>
								<CssBaseline />
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<Routes>
										<Route path="/*" element={<App />} />
									</Routes>
								</LocalizationProvider>
							</DarkModeProvider>
						</ModalContextProvider>
					</TransactionProvider>
				</ContextProvider>
			</GoogleOAuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
