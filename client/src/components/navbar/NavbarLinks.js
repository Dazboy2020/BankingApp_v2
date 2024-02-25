import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import { useEffect } from 'react';

import { Box, ListItem } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import LinkEffects from './LinkEffects';

const listItems = ['Home', 'Login', 'Register'];

function NavbarLinks() {
	const { navLink, setNavLink } = useAppContext();
	const currentPath = window.location.pathname; // Retrieves the pathname (e.g., '/login')
	const routeAfterPort = currentPath;
	const navigate = useNavigate();

	useEffect(() => {
		if (routeAfterPort === '/') setNavLink(0);
		if (routeAfterPort === '/login') setNavLink(1);
		if (routeAfterPort === '/signup') setNavLink(2);
	});

	function handleNavLink(index) {
		if (index === 0) navigate('/');
		if (index === 1) navigate('/login');
		if (index === 2) navigate('/signup');
		setNavLink(index); // Set the active item index
	}

	function navbarLinkItems() {
		return (
			<ul
				style={{
					fontFamily: 'poppins',
					// letterSpacing: 1.2,
					listStyle: 'none',
					padding: 0,
					margin: 0,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					alignContent: 'center',
					fontSize: '1.2rem',
					fontWeight: '500',
					width: '100%',
					textAlign: 'center',
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
							{navLink === index && <LinkEffects index={index} />}
						</AnimatePresence>
					</ListItem>
				))}
			</ul>
		);
	}

	return (
		<Box
			sx={{
				display: { xs: 'none', md: 'flex', alignItems: 'center' },
				mr: 2,
				width: { md: '30%', lg: '20%', xl: '15%' },
				fontWeight: 700,
				color: 'white',
			}}
		>
			{navbarLinkItems()}
		</Box>
	);
}

export default NavbarLinks;
