import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Stack } from '@mui/material';
import smallpig from '../../assets/smallpig.svg';
import NavbarLinks from './NavbarLinks';
import LoginButton from '../buttons/LoginButton';

function Navbar() {
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
					}}
				>
					<Stack direction="row" sx={{ alignItems: 'center' }}>
						<img width="60" height="60" src={smallpig} alt="logo" />
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								fontSize: { sm: '2.2rem' },
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
					<NavbarLinks />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
