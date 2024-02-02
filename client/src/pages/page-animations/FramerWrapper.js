import { AnimatePresence, easeOut, motion } from 'framer-motion';

function FramerWrapper({ children }) {
	const containerVariants = {
		initial: {
			opacity: 0,
			height: 0,
			// scale: 0.9,
		},
		animate: (index) => ({
			opacity: 1,
			height: 'auto',
			// scale: 1,
			transition: {
				type: 'tween',
				opacity: { ease: 'linear' },
				duration: 0.2,
			},
		}),
	};
	return (
		<AnimatePresence key="wrapper">
			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				exit={{
					opacity: 1,
					height: 0,
					transition: { ease: easeOut, duration: 0.2 },
				}}
				key="wrapper-inner"
				layout
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export default FramerWrapper;
