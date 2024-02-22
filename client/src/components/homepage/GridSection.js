import { Box, Stack, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import CardGrid from './cardGrid/CardGrid';
import { subtitleVariant, exitAnimation } from './variants';

const gettingStarted = {
	fontFamily: 'poppins',

	fontSize: {
		xs: '1.5rem',
		s: '1.5rem',
		sm: '1.5rem',
		md: '2rem',
	},
	color: 'antiquewhite',
	textAlign: 'center',
	fontWeight: '300',
	pt: { xs: 4, sm: 4, md: 4, lg: 4 },
	mb: { xs: 4, sm: 4, md: 4, lg: 4 },
};

function GridSection() {
	return (
		<section>
			<Stack
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: { xs: '200vh', md: '100vh' },
				}}
			>
				<Box
					component={m.div}
					layout="true"
					initial="hidden"
					variants={subtitleVariant}
					animate="visible"
					exit={exitAnimation}
				>
					<Typography sx={gettingStarted}>Getting started is easy.</Typography>
				</Box>
				<CardGrid />
			</Stack>
		</section>
	);
}

export default GridSection;
