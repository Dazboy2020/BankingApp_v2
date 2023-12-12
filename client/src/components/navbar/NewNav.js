import * as React from 'react';
import { useAppContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, ListItem } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import LinkEffects from './LinkEffects';

const listItems = ['Home', 'Login', 'Register']; // Array of list items

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
				m: 0,
				bgcolor: '#000',
			}}
		>
			<Container maxWidth="xxl">
				<Toolbar
					disableGutters
					sx={{ display: 'flex', justifyContent: 'flex-end', mr: 10 }}
				>
					{/* <Stack direction={{ xs: 'column', md: 'row' }}></Stack> */}
					<Box
						sx={{
							display: { xs: 'none', md: 'inline-block' },
							mr: 2,
							width: { md: '60%', lg: '40%', xl: '30%' },

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
								fontSize: '1.8rem',
								fontFamily: 'monospace',
								fontWeight: '500',
								width: '100%',
								textAlign: 'center',
								minWidth: '100%',
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
						</ul>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
