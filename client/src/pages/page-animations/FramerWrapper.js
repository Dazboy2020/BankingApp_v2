import { LayoutGroup, easeInOut, motion } from 'framer-motion';

function FramerWrapper({ children }) {
	const containerVariants = {
		initial: {
			y: '100%',
			opacity: 0,
		},
		animate: (index) => ({
			y: 0,
			opacity: 1,
			transition: {
				type: 'tween',
				opacity: { ease: 'linear' },
			},
		}),
	};
	return (
		<motion.div
			variants={containerVariants}
			initial="initial"
			animate="animate"
			exit={{ opacity: 0, y: '100%', transition: easeInOut }}
		>
			<LayoutGroup>{children}</LayoutGroup>
		</motion.div>
	);
}

export default FramerWrapper;
