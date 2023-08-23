import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';
const theme = createTheme({
	palette: {
		primary: {
			palette: {
				main: blue[500],
			},
			secondary: {
				main: red[500],
			},
		},
	},
	components: {
		// MuiCard: {
		// 	styleOverrides: {
		// 		root: {
		// 			backgroundColor: 'main',
		// 		},
		// 	},
		// },
	},
});

export default theme;
