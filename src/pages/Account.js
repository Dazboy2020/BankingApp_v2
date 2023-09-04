import ResponsiveDrawer from '../components/Drawer/Draw';
import {
	CardContent,
	Card,
	Stack,
	Box,
	CardMedia,
	TextField,
} from '@mui/material';
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
					direction={{ sm: 'column', md: 'row' }}
					sx={{
						m: 2,
						justifyContent: { sm: 'flex-start', md: 'center' },
					}}
					height="100vh"
				>
					<Card
						component="main"
						sx={{
							width: '100%',
							height: '75%',
							// mt: '30rem',
						}}
					>
						<CardContent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								// justifyContent: 'space-between',
								// width: '100%',
								height: '100%',
								flexGrow: 1,
							}}
						>
							<CardMedia
								sx={{ width: '120px', height: 'auto' }}
								component="img"
								src="/avatar-min.jpg" // Provide the correct path here
								alt="user avatar"
							/>
							<Box
								component="form"
								sx={{
									'& .MuiTextField-root': {
										m: 1,
										width: { md: '80ch', sm: '45ch', s: '100%', xs: '100%' },
									},
								}}
								noValidate
								autoComplete="off"
							>
								<Box sx={{}}>
									<TextField
										id="outlined-firstname"
										label="First Name"
										defaultValue="Default Value"
									/>
									<TextField
										id="outlined-secondname"
										label="Second Name"
										defaultValue="Default Value"
									/>
								</Box>
								<Box>
									<TextField
										id="outlined-email"
										label="Email"
										defaultValue="Default Value"
									/>
									<TextField
										id="outlined-currency"
										label="Currency "
										defaultValue="Default Value"
									/>
								</Box>
								<Box
									sx={{
										position: 'absolute',
										bottom: '1rem',
									}}
								>
									<p>
										<a href="https://www.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_7074311.htm#query=avatar&position=2&from_view=keyword&track=sph">
											Image by pikisuperstar
										</a>
										on Freepik
									</p>
								</Box>
							</Box>
						</CardContent>
					</Card>
				</Stack>
			</Box>
		</Box>
	);
}

export default Account;

// <Card
// 									component="main"
// 									sx={{
// 										// display: 'flex',
// 										// width: '75%',
// 										// height: '100%',
// 										height: '50%',
// 										width: '20rem',
// 									}}
// 								>
// 									<CardContent
// 										sx={{
// 											display: 'flex',
// 											flexDirection: 'column',
// 											justifyContent: 'space-between',
// 											// width: '100%',
// 											height: '100%',
// 										}}
// 									>
// 										<CardMedia
// 											sx={{ width: '120px', height: 'auto' }}
// 											component="img"
// 											src="/avatar-min.jpg" // Provide the correct path here
// 											alt="user avatar"
// 										/>
// 									</CardContent>
// 								</Card>
