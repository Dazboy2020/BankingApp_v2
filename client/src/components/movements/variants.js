export const containerVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
		y: '50%%',
	},
	visible: {
		opacity: 1,
		scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
		y: 0,

		transition: {
			type: 'tween',
			// ease: [0.76, 0, 0.24, 1],

			// damping: 20,
			// stiffness: 200,
			duration: 0.2,
		},
	},
};

export const exitAnimation = {
	opacity: 0,
	scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
	transition: {
		// type: 'spring',
		// damping: 20,
		// stiffness: 200,
		duration: 0.2,
		// ease: [0.76, 0, 0.24, 1],
	},
};
