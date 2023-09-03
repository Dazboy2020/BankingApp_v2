import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';

function Analytics() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Box
				sx={{
					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
				}}
			>
				<h1>Analytics</h1>
			</Box>
		</>
	);
}

export default Analytics;
