import { Box, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import CardGrid from './cardGrid/CardGrid';
import { subtitleVariant, exitAnimation } from './variants';

const typographyStyle = {
	fontFamily: 'poppins',

	fontSize: {
		xs: '1.2rem',
		s: '1.5rem',
		sm: '1.5rem',
		md: '2rem',
	},
	color: 'antiquewhite',
	textAlign: 'center',
	// mt: { xs: '1.5rem', s: '1.5rem', sm: '1.5rem' },
	fontWeight: '300',
	pt: 2,
	pb: 4,
};

function GridSection() {
	return (
		<section>
			<Box
				sx={{
					// pt: { xs: 4, sm: 8, md: 15, lg: 20 },
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				component={m.div}
				layout="true"
				initial="hidden"
				variants={subtitleVariant}
				animate="visible"
				exit={exitAnimation}
			>
				<Typography sx={typographyStyle}>Getting started is easy.</Typography>
			</Box>
			<CardGrid />
		</section>
	);
}

export default GridSection;
