import ResponsiveDrawer from '../components/Drawer/Draw';
import { CardContent, Card, Stack, Box, CardMedia } from '@mui/material';
import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';

function Account() {
	return (
		<Box sx={{ backgroundColor: '#ececec' }}>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Box
				sx={{
					height: '100vh',

					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
				}}
			>
				<Stack
					spacing={2}
					// direction={{ sm: 'column', md: 'row' }}
					sx={{ m: 2 }}
					height="100vh"
				>
					<Card
						component="main"
						sx={{
							// display: 'flex',
							// width: '75%',
							// height: '100%',
							height: '50%',
						}}
					>
						<CardContent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								// width: '100%',
								height: '100%',
							}}
						>
							<CardMedia
								sx={{ width: '120px', height: 'auto' }}
								component="img"
								src="/avatar-min.jpg" // Provide the correct path here
								alt="user avatar"
							/>
							<p>
								<a href="https://www.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_7074311.htm#query=avatar&position=2&from_view=keyword&track=sph">
									Image by pikisuperstar
								</a>{' '}
								on Freepik
							</p>
						</CardContent>
					</Card>
				</Stack>
				{/* <Card sx={{ m: 2 }}></Card> */}
			</Box>
		</Box>
	);
}

export default Account;
