import { Box, Stack, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import CardGrid from './cardGrid/CardGrid';
import { subtitleVariant, exitAnimation } from './variants';
import { useState } from 'react';

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
	const [isInView, setIsInView] = useState(false);

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
					onViewportEnter={() => {
						setIsInView(true);
					}}
					component={m.div}
					layout="true"
					initial={false}
					animate={isInView ? 'visible' : 'hidden'}
					variants={subtitleVariant}
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
