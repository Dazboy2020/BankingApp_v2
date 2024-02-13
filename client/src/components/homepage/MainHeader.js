import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { containerVariants, exitAnimation, titleVariant } from './variants';
import { motion as m } from 'framer-motion';

function MainHeader() {
	const theme = useTheme();

	const textStyles = {
		fontFamily: 'poppins',
		fontSize: { xs: '1.25rem', s: '1.25rem', sm: '2rem', md: '2rem' },
		color: 'antiquewhite',
		textAlign: 'center',
		letterSpacing: 1,
		fontWeight: 400,
		mt: { xs: 5, sm: 5, md: 3 },
	};

	return (
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
					sm: '4rem',
					md: '5rem',
				},
				color: 'antiquewhite',
				textAlign: 'center',
				letterSpacing: -1,
				fontWeight: '300',
				lineHeight: { xs: 1.1 },

				// mb: { xs: 1 },
				[theme.breakpoints.down('md')]: {
					mb: 5,
				},
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
	);
}

export default MainHeader;
