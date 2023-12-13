import * as React from 'react';
import { useAppContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, ListItem, Stack } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import LinkEffects from './LinkEffects';
import smallpig from '../../assets/smallpig.svg';
import LoginButton from '../buttons/LoginButton';

const listItems = ['Home', 'Login', 'Register'];

function ResponsiveAppBar() {
	const { navLink, setNavLink } = useAppContext();
	const currentPath = window.location.pathname; // Retrieves the pathname (e.g., '/login')
	const routeAfterPort = currentPath;

	React.useEffect(() => {
		if (routeAfterPort === '/') setNavLink(0);
		if (routeAfterPort === '/login') setNavLink(1);
		if (routeAfterPort === '/signup') setNavLink(2);
	});
	const navigate = useNavigate();

	function handleNavLink(index) {
		if (index === 0) navigate('/');
		if (index === 1) navigate('/login');
		if (index === 2) navigate('/signup');
		setNavLink(index); // Set the active item index
	}

	return (
		<AppBar
			position="sticky"
			sx={{
				height: { md: '6rem' },
				justifyContent: 'center',
				alignContent: 'centre',
				alignItems: 'center',
				mt: { xs: 1, s: 3, sm: 3, md: 0 },
				bgcolor: '#000',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar
					disableGutters
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mr: { s: 1, md: 1 },
					}}
				>
					<Stack direction="row" sx={{ alignItems: 'center' }}>
						<img width="75" height="75" src={smallpig} alt="logo" />
						<Box
							sx={{
								fontSize: { xs: '1.5em', sm: '2.2rem' },
								fontFamily: 'monospace',
								fontWeight: '500',
								alignItems: 'center',
								ml: { xs: 3, md: 3.5 },
							}}
						>
							Expensify
						</Box>
					</Stack>
					<LoginButton />

					<Box
						sx={{
							display: { xs: 'none', md: 'flex', alignItems: 'center' },
							mr: 2,
							width: { md: '40%', lg: '30%', xl: '20%' },

							fontWeight: 700,
							color: 'white',
						}}
					>
						<ul
							style={{
								listStyle: 'none',
								padding: 0,
								margin: 0,
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								alignContent: 'center',
								fontSize: '1.8rem',
								fontFamily: 'monospace',
								fontWeight: '500',
								width: '100%',
								textAlign: 'center',
								// minWidth: '100%',
							}}
						>
							{listItems.map((item, index) => (
								<ListItem
									key={index}
									sx={{
										width: '100%',
										justifyContent: 'center',
										'&:hover': {
											cursor: 'pointer',
											color: navLink === index ? 'white' : '#f70776',
											transition: 'color  0.3s ease-in-out',
										},
									}}
									onClick={() => handleNavLink(index)}
								>
									{item}

									<AnimatePresence mode="wait">
										{navLink === index && <LinkEffects />}
									</AnimatePresence>
								</ListItem>
							))}
							{/* {<GoogleLoginButton width="100%" height="100%" />} */}
						</ul>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
