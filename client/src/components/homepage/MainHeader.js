import { Box, Typography } from '@mui/material';
import { containerVariants, exitAnimation, titleVariant } from './variants';
import { motion as m } from 'framer-motion';

const textStyles = {
	fontFamily: 'system-ui',
	fontSize: { xs: '1.25rem', s: '1.25rem', sm: '2rem', md: '2rem' },
	color: 'antiquewhite',
	textAlign: 'center',
	mt: 2,
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
						xs: '3rem',
						s: '3rem',
						sm: '3rem',
						md: '6rem',
					},
					color: 'antiquewhite',
					textAlign: 'center',
					letterSpacing: -1,
					fontWeight: '300',
					lineHeight: { xs: 1.1 },

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
