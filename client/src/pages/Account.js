import ResponsiveDrawer from '../components/drawer/Draw';
import PageLayout from './layout/PageLayout';
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
import { useDarkMode } from '../hooks/useDarkMode';

function Account() {
	const { state } = useAppContext();
	const { isDarkMode } = useDarkMode();

	const disabledStyles = {
		'& .MuiInputBase-input.Mui-disabled': {
			WebkitTextFillColor: isDarkMode ? 'grey' : 'secondary',
		},
		'& .MuiOutlinedInput-root.Mui-disabled': {
			'& > fieldset': {
				border: isDarkMode ? '1px solid grey' : '1px solid black',
			},
		},
		'& .MuiInputLabel-formControl': {
			color: isDarkMode ? 'grey' : 'secondary',
		},
	};

	return (
		<Box sx={{ backgroundColor: '#343a40' }}>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<PageLayout>
				<Stack
					// spacing={2}
					direction={{ sm: 'column', md: 'row' }}
					sx={{
						justifyContent: { sm: 'flex-start', md: 'center' },
						alignItems: { md: 'center' },
						ml: { xs: 3, sm: 6 },
						mr: { xs: 3, sm: 6 },
						mt: { xs: 5, md: 10 },
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
										sx={{
											'& .MuiOutlinedInput-root': {
												'& > fieldset': {
													border: isDarkMode
														? '1px solid grey'
														: '1px solid black',
												},
											},
										}}

										// disabled={true}
									/>
									<TextField
										id="outlined-secondname"
										label="Second Name"
										defaultValue={state.lastName}
										color="secondary"
										sx={{
											'& .MuiOutlinedInput-root': {
												'& > fieldset': {
													border: isDarkMode
														? '1px solid grey'
														: '1px solid black',
												},
											},
										}}
										// disabled={true}
									/>
								</Box>
								<Box sx={{ textAlign: 'center' }}>
									<TextField
										id="outlined-email"
										label="Email"
										defaultValue={state.loggedInAccount.email}
										sx={disabledStyles}
										disabled={true}
									/>
									<TextField
										id="outlined-currency"
										label="Currency "
										defaultValue="€"
										// color="secondary"
										disabled={true}
										sx={disabledStyles}
									/>
								</Box>
								<Box
									sx={{
										position: 'absolute',
										bottom: '1rem',
										color: 'white', // Set the text color
										textDecoration: 'none', // Add underline
										'&:hover': {
											color: 'white', // Change color on hover
										},
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
			</PageLayout>
		</Box>
	);
}

export default Account;
