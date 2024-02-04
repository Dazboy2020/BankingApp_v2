import { useDarkMode } from '../../hooks/useDarkMode';
import { Box } from '@mui/material';
import AlertDialogSlide from '../../UI/AlertDialogue/AlertDialogue';
import ResponsiveDrawer from '../../components/drawer/Draw';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

function PageLayout({ children }) {
	const { isDarkMode } = useDarkMode();

	const containerVariants = {
		initial: {
			opacity: 0,
		},
		animate: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				opacity: { duration: 0.5, ease: easeInOut },
			},
		}),
	};

	return (
		<>
			<AlertDialogSlide />
			<ResponsiveDrawer />
			<AnimatePresence>
				<Box
					key="pageLayout"
					component={motion.div}
					initial="initial"
					animate="animate"
					exit={{ y: '5%', opacity: 0 }}
					variants={containerVariants}
					sx={{
						minHeight: '100vh',
						ml: { lg: '22rem', md: '22rem', sm: '19rem', xs: 0 },
						mr: { lg: 0, sm: 0, m: 0 },
						backgroundColor: isDarkMode ? ' #212529' : '#343a40',
						overflowX: 'hidden',
						overflowY: 'hidden',
					}}
				>
					<Box
						direction={{ sm: 'column', md: 'row' }}
						sx={{
							justifyContent: { sm: 'flex-start', md: 'center' },
							ml: { xs: 3, sm: 6 },
							mr: { xs: 3, sm: 6 },
							mt: { xs: 5, md: 10 },
						}}
					>
						{children}
					</Box>
				</Box>
			</AnimatePresence>
		</>
	);
}

export default PageLayout;
