export const containerVariants = {
	hidden: {
		opacity: 0,
		scale: [0],
		y: -100,
	},
	visible: {
		opacity: [1],
		scale: [0, 1],
		y: 0,

		transition: {
			type: 'tween',
			delay: 0.4,
		},
	},
};

export const titleVariant = {
	hidden: {
		opacity: 0,
		y: '100%',
	},
	visible: {
		opacity: 1,
		y: 0,

		transition: {
			type: 'tween',
			duration: 0.5,
			delay: 1,
			staggerChildren: 1,
		},
	},
};

export const buttonVariant = {
	hidden: {
		opacity: 0,
		x: '100%',
	},
	visible: {
		opacity: 1,
		x: 0,

		transition: {
			type: 'spring',
			duration: 0.5,
			delay: 1.5,
		},
	},
};

export const cardTextVariant = {
	hidden: {
		opacity: 0,
		// y: '-100%',
		scaleX: 0,
	},
	visible: {
		opacity: 1,
		// y: 0,
		scaleX: 1,

		transition: {
			type: 'tween',
			duration: 0.3,
			delay: 2,
		},
	},
};

export const headerVariant = {
	hidden: {
		opacity: 0,
		y: '-100%',
	},
	visible: {
		opacity: 1,
		y: 0,

		transition: {
			type: 'spring',
			duration: 0.3,
			delay: 3,
			mass: 0.5,
			stiffness: 300,
		},
	},
};

export const exitAnimation = {
	opacity: 0,
	transition: { duration: 0.2 },
};
