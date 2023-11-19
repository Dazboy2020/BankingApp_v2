import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EuroIcon from '@mui/icons-material/Euro';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import HouseIcon from '@mui/icons-material/House';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import Header from './Header';
import { useDarkMode } from '../../Hooks/useDarkMode';

const drawerWidth = 305;

const ListNew = (props) => {
	const {
		setOpen,
		state,
		dispatch,
		modalMessage,
		setModalMessage,
		modalTitle,
		setModalTitle,
		modalAction,
		setModalAction,
	} = useAppContext();

	const navigate = useNavigate();

	function handleClick() {
		setModalMessage('Are you sure you want to exit Expensify?');
		setModalTitle('You are about to disconnect from all services.');
		setModalAction('logout');
		setOpen(true, modalMessage, modalTitle, modalAction);
	}

	function handleLink(text, index) {
		if (text === 'Logout') return handleClick();

		dispatch({ type: 'addActiveClass', payload: index });

		navigate('/' + text);
	}

	const itemsList = [
		{
			text: 'Overview',
			icon: <HouseIcon />,
		},
		{
			text: 'Expenses',
			icon: <ShoppingCartIcon />,
		},
		{
			text: 'Deposits',
			icon: <EuroIcon />,
		},
		{
			text: 'Charts',
			icon: <PsychologyAltIcon />,
		},
		{
			text: 'Account',
			icon: <AccountCircleIcon />,
		},
		{
			text: 'Logout',
			icon: <ExitToAppIcon />,
			onClick: handleClick,
		},
	];

	//* styles for live version
	// const styles = {
	// 	'.css-19tv5ub': {
	// 		letterSpacing: '.1rem',
	// 		fontSize: '1.4rem',
	// 		fontWeight: 'bold',
	// 	},
	// };

	const styles = {
		'.css-ikss9a-MuiTypography-root': {
			letterSpacing: '.1rem',
			fontSize: '1.4rem',
			fontWeight: 'bold',
		},
	};

	return (
		<List>
			{itemsList.map((item, index) => {
				const { text, icon, onClick } = item;
				const buttonStyles = {
					'&:hover': {
						backgroundColor: state.isActive === index ? '#f97316' : '#343a40',
						cursor: 'pointer',
					},
					width: '100%',
					textAlign: 'left',
					backgroundColor: state.isActive === index ? '#f97316' : '#242a2e',
					color: state.isActive === index ? '#f5f5f5' : '#d6d3d1',
				};

				return (
					<ListItem sx={{ width: '100%' }} key={item.text} onClick={onClick}>
						<Button sx={buttonStyles} onClick={() => handleLink(text, index)}>
							{icon && <ListItemIcon>{icon}</ListItemIcon>}
							<ListItemText primary={text} sx={styles} />
						</Button>
					</ListItem>
				);
			})}
		</List>
	);
};

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
			{/* <Divider /> */}
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
						bgcolor: isDarkMode ? '#212529' : '#343a40',

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
					// p: 3,
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
