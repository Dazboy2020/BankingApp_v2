export const containerVariants = {
	hidden: {
		opacity: 0,
		y: '100%',
	},
	visible: {
		opacity: 1,
		scale: [0, 1],
		y: 0,

		transition: {
			type: 'spring',
			damping: 20,
			stiffness: 200,
			duration: 0.1,
		},
	},
};

export const exitAnimation = {
	opacity: 1,
	scale: [1, 0],
	transition: {
		type: 'spring',
		damping: 20,
		stiffness: 200,
		duration: 0.1,
	},
};
