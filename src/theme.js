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
					// Set the background color for the AppBar
					backgroundColor: '#680747', // Replace with your desired background color
				},
				colorDefault: {
					// Set the color for the icons inside the AppBar to white
					'& .MuiSvgIcon-root': {
						color: 'white',
					},
				},
			},
		},
	},
});

export default theme;
