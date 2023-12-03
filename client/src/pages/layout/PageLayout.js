import { useDarkMode } from '../../hooks/useDarkMode';
import { Box } from '@mui/material';
import classes from '../MainApp.module.css';

function PageLayout({ children }) {
	const { isDarkMode } = useDarkMode();
	return (
		<Box
			className={isDarkMode ? classes.darkmode : classes.body}
			sx={{
				minHeight: '100vh',
				ml: { lg: '22rem', md: '22rem', sm: '19rem', xs: 0 },
				mr: { lg: 0, sm: 0, m: 0 },
			}}
		>
			{children}
		</Box>
	);
}

export default PageLayout;
