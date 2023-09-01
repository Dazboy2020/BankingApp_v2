import { createTheme } from '@mui/material';
import { blue, purple } from '@mui/material/colors';
const theme = createTheme({
	palette: {
		primary: {
			main: blue[800],
		},
		secondary: {
			main: purple[500],
		},
	},
	components: {
		MuiCard: {
			elevation: 6,
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					background: '#242a2e',
					color: '#fff',
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					// Set the color to white
					color: 'white',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#680747',
				},
				colorDefault: {
					'& .MuiSvgIcon-root': {
						color: 'white',
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontSize: '20px', // Set your desired font size
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				text: {
					color: '#fff',
				},
			},
		},
	},
});

export default theme;
