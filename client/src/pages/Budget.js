import { Stack, Typography } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../components/drawer/Draw';
import PageLayout from './layout/PageLayout';

function Budget() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<PageLayout>
				<Stack
					// spacing={2}
					direction={{ sm: 'column', md: 'row' }}
					sx={{
						justifyContent: { sm: 'flex-start', md: 'center' },
						ml: { xs: 3, sm: 6 },
						mr: { xs: 3, sm: 6 },
						mt: { xs: 5, md: 10 },
					}}
					height="80vh"
				>
					<Typography sx={{ color: 'white', mt: 10, fontSize: '2rem' }}>
						This is Budget Page
					</Typography>
					;
				</Stack>
			</PageLayout>
		</>
	);
}

export default Budget;
