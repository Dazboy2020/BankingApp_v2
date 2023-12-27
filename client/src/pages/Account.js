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
			WebkitTextFillColor: isDarkMode ? '#d6d3d1' : 'secondary',
		},
		'& .MuiOutlinedInput-root.Mui-disabled': {
			'& > fieldset': {
				border: isDarkMode ? '1px solid gray' : '1px solid black',
			},
		},
		'& .MuiInputLabel-formControl': {
			color: isDarkMode ? '#d6d3d1' : 'secondary',
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
							}}
						>
							<CardMedia
								sx={{ width: '120px', height: 'auto', mb: 3 }}
								component="img"
								src="/avatar-min.jpg"
								alt="user avatar"
							/>
							<Box
								component="form"
								sx={{
									'& .MuiTextField-root': {
										m: 1,
										width: { md: '80ch', sm: '45ch', s: '99%', xs: '99%' },
										mt: 2,
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
										sx={disabledStyles}
										disabled={true}
									/>
									<TextField
										id="outlined-secondname"
										label="Second Name"
										defaultValue={state.lastName}
										color="secondary"
										sx={disabledStyles}
										disabled={true}
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
										disabled={true}
										sx={disabledStyles}
									/>
								</Box>
								<Box
									sx={{
										position: 'absolute',
										bottom: '1rem',
										textDecoration: 'none',
										'& a': {
											color: 'gray',
											textDecoration: 'none',
											'&:hover': {
												color: '#d6d3d1',
											},
										},
									}}
								>
									<a href="https://www.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_7074311.htm#query=avatar&position=2&from_view=keyword&track=sph">
										Image by pikisuperstar
									</a>
									on Freepik
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
