import ResponsiveDrawer from '../components/Drawer/Draw';
import { Box } from '@mui/material';

function Deposits() {
	return (
		<>
			<ResponsiveDrawer />
			<Box
				sx={{
					ml: { lg: '19rem', md: '19rem', sm: '17rem', s: '.5rem' },
					mr: { sm: '.5rem', m: '.5rem' },
				}}
			>
				<h1>Deposits</h1>
			</Box>
		</>
	);
}

export default Deposits;
