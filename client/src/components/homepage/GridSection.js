import { Box, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import CardGrid from './cardGrid/CardGrid';
import { subtitleVariant, exitAnimation } from './variants';

function GridSection() {
	return (
		<section>
			<Box
				sx={{ mt: { xs: 4, sm: 8, md: 10, lg: 15 } }}
				component={m.div}
				layout="true"
				initial="hidden"
				variants={subtitleVariant}
				animate="visible"
				exit={exitAnimation}
			>
				<Typography
					sx={{
						// fontFamily: 'system-ui',
						fontFamily: 'poppins',

						fontSize: {
							xs: '1.2rem',
							s: '1.5rem',
							sm: '1.5rem',
							md: '2rem',
						},
						color: 'antiquewhite',
						textAlign: 'center',
						mt: { xs: '1.5rem', s: '1.5rem', sm: '1.5rem' },
						fontWeight: '300',
						pt: 2,
						pb: 2,
					}}
				>
					Getting started is easy.
				</Typography>
			</Box>
			<CardGrid />
		</section>
	);
}

export default GridSection;
