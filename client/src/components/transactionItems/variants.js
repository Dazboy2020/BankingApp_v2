export const containerVariants = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: (index) => ({
		scale: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.3,
			duration: 0.5,
			// delayChildren: 0.3,
			// staggerChildren: 0.05,
		},
	}),
};

export const exitAnimation = {
	scale: 0,
	opacity: 0,
	transition: {
		type: 'spring',
		bounce: 0.3,
		// opacity: { delay: 0.025 },
	},
};
