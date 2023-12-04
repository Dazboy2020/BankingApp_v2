export const containerVariants = {
	hidden: {
		opacity: 0,
		scale: [0.8, 0.9, 1],
		y: 100,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,

		transition: {
			type: 'spring',
			delay: 0.1,
			mass: 0.5,
			stiffness: 100,
		},
	},
};

export const exitAnimation = {
	opacity: 1,
	scale: [0.9, 0],
	transition: { type: 'spring', damping: 20, stiffness: 100, duration: 0.1 },
};
