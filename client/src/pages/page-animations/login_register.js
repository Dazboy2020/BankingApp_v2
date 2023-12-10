export const containerVariants = {
	hidden: {
		opacity: 0,
		scale: [0.5, 0.8, 0.9, 1],
		y: '100%',
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,

		transition: {
			type: 'spring',
			mass: 0.5,
			stiffness: 100,
			duration: 0.2,
		},
	},
};
export const exitAnimation = {
	opacity: 0,
	scale: [0.9, 0.8, 0.5, 0],
	transition: {
		duration: 0.2,
	},
};
