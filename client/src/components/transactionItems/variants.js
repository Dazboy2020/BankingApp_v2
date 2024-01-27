export const containerVariants = {
	hidden: {
		scale: 0,
		opacity: 0,
	},
	visible: (index) => ({
		scale: 1,
		opacity: 1,
		transition: {
			opacity: { delay: 0.025 },
		},
	}),
};

export const exitAnimation = {
	scale: 0,
	opacity: 0,
	transition: {
		type: 'spring',
		bounce: 0.1,
		opacity: { delay: 0.025 },
	},
};
