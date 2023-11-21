export const containerVariants = {
	hidden: {
		opacity: 0,
		scale: [0.2, 0.4, 0.6, 0.8, 0.9, 1],
		y: 500,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,

		transition: {
			type: 'spring',
			delay: 0.2,
			mass: 0.5,
			stiffness: 100,
		},
	},
};

export const exitAnimation = {
	opacity: 0,
	scale: [0.9, 0.7, 0.5, 0.3, 0],
	transition: { type: 'spring', mass: 0.5, stiffness: 100 },
};
