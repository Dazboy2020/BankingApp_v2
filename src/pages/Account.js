import ResponsiveDrawer from '../components/Drawer/Draw';
import { CardContent, Card, Stack } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';

function Account() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Stack
				flexDirection="row"
				sx={{
					height: '80vh',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
				}}
			>
				<Card
					sx={{
						width: '30%',
						height: '30%',
					}}
				>
					<CardContent>
						<h1>Card 1</h1>
					</CardContent>
				</Card>
				<Card
					sx={{
						width: '30%',
						height: '30%',
					}}
				>
					<CardContent>
						<h1>Card 2</h1>
					</CardContent>
				</Card>
			</Stack>
		</>
	);
}

export default Account;
