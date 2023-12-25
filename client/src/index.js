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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId="841090446655-o7mj2dl8hvgrm3nrga63s5924f033oea.apps.googleusercontent.com">
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
