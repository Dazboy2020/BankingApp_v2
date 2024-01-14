import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Stack } from '@mui/material';
import smallpig from '../../assets/smallpig.svg';
import NavbarLinks from './NavbarLinks';

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
					<NavbarLinks />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;