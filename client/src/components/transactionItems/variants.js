export const containerVariants = {
	hidden: {},
	visible: (index) => ({
		opacity: 1,
		transition: {
			opacity: { delay: 0.025 },
		},
	}),
};

export const exitAnimation = {
	opacity: 0,
	scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
	transition: {
		type: 'spring',
		bounce: 0.3,
		opacity: { delay: 0.025 },
	},
};
