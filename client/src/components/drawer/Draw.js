import { useDarkMode } from '../../hooks/useDarkMode';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import Header from './Header';

import ListNew from './ListNew';

// const drawerWidth = 305;
const drawerWidth = 360;

function ResponsiveDrawer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const { isDarkMode } = useDarkMode();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<>
			<Toolbar />
			<List sx={{ mt: '3rem' }}>
				<ListNew />
			</List>
		</>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: {
						sm: `calc(100% - ${drawerWidth - 40}px)`,
						md: `calc(100% - ${drawerWidth}px)`,
					},
					ml: { sm: `${drawerWidth}px`, lg: `${drawerWidth + 100}px` },
					height: { xs: '4rem', sm: '5rem', md: '7rem' }, //! new
				}}
			>
				<Toolbar
					sx={{
						height: '7rem',
						padding: { xs: '.5rem', s: 0, sm: '1rem' },
						// bgcolor: isDarkMode ? '#212529' : '#343a40',
						backgroundColor: isDarkMode ? 'black' : '#343a40',

						borderBottom: '1px solid #f97316',
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Header />
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							// width: drawerWidth,
							width: { sm: `${drawerWidth - 40}px`, md: drawerWidth },
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					pb: 0,
					width: {
						sm: `calc(100% - ${drawerWidth}px)`,
						md: drawerWidth,
					},
				}}
			>
				<Toolbar />
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
