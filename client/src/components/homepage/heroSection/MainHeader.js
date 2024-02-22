import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import {
	buttonVariant,
	containerVariants,
	exitAnimation,
	titleVariant,
} from '../variants';
import { motion as m } from 'framer-motion';
import GoogleLoginButton from '../../buttons/GoogleLogin';
import continueImg from '../../../assets/continue.png';

function MainHeader() {
	const theme = useTheme();

	const textStyles = {
		fontFamily: 'poppins',
		fontSize: { xs: '1.25rem', s: '1.25rem', sm: '2rem', md: '2rem' },
		color: 'antiquewhite',
		textAlign: 'left',
		letterSpacing: 1,
		fontWeight: 400,
		mt: { xs: 5, sm: 5, md: 3 },
		[theme.breakpoints.down('md')]: {
			mb: 5,
			textAlign: 'center',
		},
	};

	const welcomeText = {
		fontFamily: 'poppins',
		fontSize: {
			xs: '3rem',
			s: '3rem',
			sm: '4rem',
			md: '5rem',
		},
		color: 'antiquewhite',
		textAlign: 'left',
		letterSpacing: -1,
		fontWeight: '300',
		lineHeight: { xs: 1.1 },

		[theme.breakpoints.down('md')]: {
			mb: 5,
			textAlign: 'center',
		},
	};

	const googleButtonStyle = {
		display: 'flex',
		justifyContent: 'left',
		pb: 4,
		width: '100%',
		mt: { md: 2, lg: 5 },
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			justifyContent: 'center',
		},
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
			sx={welcomeText}
		>
			Welcome to{' '}
			<span
				style={{
					backgroundImage: `linear-gradient(0deg, #c75a90 0%, #f70776 100%)`,
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					color: 'transparent',
				}}
			>
				Expensify
			</span>
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
			<Box
				component={m.div}
				layout="true"
				initial="hidden"
				variants={buttonVariant}
				animate="visible"
				exit={exitAnimation}
				key="button"
				sx={googleButtonStyle}
			>
				<GoogleLoginButton height="4rem" padding={0} image={continueImg} />
			</Box>
		</Box>
	);
}

export default MainHeader;
