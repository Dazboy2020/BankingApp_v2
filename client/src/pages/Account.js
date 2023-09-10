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
import { useAppContext } from '../context/context';

function Account() {
	const { state } = useAppContext();
	return (
		<Box sx={{ backgroundColor: '#ececec' }}>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<Box
				sx={{
					height: '90vh',
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
						alignItems: { md: 'center' },
					}}
					height="80vh"
				>
					<Card
						component="main"
						sx={{
							width: '100%',
							height: { xs: '100%', s: '100%', sm: '75%' },
							justifyContent: 'center',
							alignItems: 'center',
							// mt: '30rem',
						}}
					>
						<CardContent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								height: '100%',
								// flexGrow: 1,
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
										width: { md: '80ch', sm: '45ch', s: '99%', xs: '99%' },
									},
								}}
								noValidate
								autoComplete="off"
							>
								<Box sx={{ textAlign: 'center' }}>
									<TextField
										id="outlined-firstname"
										label="First Name"
										defaultValue={state.user}
										color="secondary"
										disabled={true}
									/>
									<TextField
										id="outlined-secondname"
										label="Second Name"
										defaultValue={state.lastName}
										color="secondary"
										disabled={true}
									/>
								</Box>
								<Box sx={{ textAlign: 'center' }}>
									<TextField
										id="outlined-email"
										label="Email"
										defaultValue={state.loggedInAccount.email}
										color="secondary"
										disabled={true}
									/>
									<TextField
										id="outlined-currency"
										label="Currency "
										defaultValue="€"
										color="secondary"
										disabled={true}
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
