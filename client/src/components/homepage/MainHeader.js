import { Box, Typography } from '@mui/material';
import { containerVariants, exitAnimation, titleVariant } from './variants';
import { motion as m } from 'framer-motion';

const textStyles = {
	fontFamily: 'system-ui',
	fontSize: { xs: '1.25rem', s: '1.25rem', sm: '2rem', md: '2rem' },
	color: 'antiquewhite',
	textAlign: 'center',
	mt: 1,
	letterSpacing: 1,
	fontWeight: 400,
};

function MainHeader() {
	return (
		<Typography component="section">
			<Box
				component={m.div}
				layout="true"
				initial="hidden"
				animate="visible"
				exit={exitAnimation}
				variants={containerVariants}
				key="header"
				sx={{
					fontFamily: 'poppins',
					fontSize: {
						xs: '3.5rem',
						s: '3.5rem',
						sm: '3.5rem',
						md: '6rem',
					},
					color: 'antiquewhite',
					textAlign: 'center',
					letterSpacing: -1,
					fontWeight: '300',

					mb: { xs: 1 },
				}}
			>
				Welcome to Expensify.
				<Box
					component={m.div}
					layout="true"
					initial="hidden"
					sx={textStyles}
					variants={titleVariant}
					animate="visible"
					exit={exitAnimation}
					key="subtitle"
				>
					Expense management simplified.
				</Box>
			</Box>
		</Typography>
	);
}

export default MainHeader;
