import { LayoutGroup, easeInOut, motion } from 'framer-motion';

function FramerWrapperOpacity({ children }) {
	const containerVariants = {
		initial: {
			opacity: 0,
		},
		animate: (index) => ({
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
			exit={{ opacity: 0, transition: easeInOut }}
		>
			<LayoutGroup>{children}</LayoutGroup>
		</motion.div>
	);
}

export default FramerWrapperOpacity;
