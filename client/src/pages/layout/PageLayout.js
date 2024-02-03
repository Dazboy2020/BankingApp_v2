import { useDarkMode } from '../../hooks/useDarkMode';
import { Box } from '@mui/material';
import AlertDialogSlide from '../../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../../components/drawer/Draw';

function PageLayout({ children }) {
	const { isDarkMode } = useDarkMode();

	return (
		<>
			<AlertDialogSlide />
			<ResponsiveDrawer />
			<Box
				sx={{
					minHeight: '100vh',
					ml: { lg: '22rem', md: '22rem', sm: '19rem', xs: 0 },
					mr: { lg: 0, sm: 0, m: 0 },
					backgroundColor: isDarkMode ? ' #212529' : '#343a40',
					overflowX: 'hidden',
					overflowY: 'hidden',
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
		</>
	);
}

export default PageLayout;
