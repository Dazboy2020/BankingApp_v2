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
			<Box
				direction={{ sm: 'column', md: 'row' }}
				sx={{
					justifyContent: { sm: 'flex-start', md: 'center' },
					ml: { xs: 3, sm: 6 },
					mr: { xs: 3, sm: 6 },
					mt: { xs: 5, md: 10 },
				}}
			>
				{children}
			</Box>
		</Box>
	);
}

export default PageLayout;
