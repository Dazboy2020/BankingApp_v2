import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/context';
import { CssBaseline } from '@mui/material';
import { DarkModeProvider } from './Hooks/useDarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ContextProvider>
			<DarkModeProvider>
				<CssBaseline />
				<App />
			</DarkModeProvider>
		</ContextProvider>
	</React.StrictMode>
);
