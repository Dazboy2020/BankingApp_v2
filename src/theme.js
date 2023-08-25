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
	},
});

export default theme;
