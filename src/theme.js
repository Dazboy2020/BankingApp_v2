import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';
const theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: red[500],
		},
	},
	components: {
		MuiCard: {
			elevation: 6,
		},
	},
});

export default theme;
