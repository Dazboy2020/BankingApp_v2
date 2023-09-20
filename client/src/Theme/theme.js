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
					backgroundColor: '#343a40',
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
					// fontSize: '24px', // Set your desired font size
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'MediumVioletRed', // Set your desired background color here
					color: 'white', // Set your desired text color here
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					// backgroundColor: '#e0e0e0',
					backgroundColor: '#f0ebd8',
					// backgroundColor: '#1c1917',
					// borderRadius: '10px',
				},
			},
		},
	},
});

export default theme;
