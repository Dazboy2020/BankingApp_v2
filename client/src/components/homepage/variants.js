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
		y: '100%',
	},
	visible: {
		opacity: 1,
		y: 0,

		transition: {
			type: 'spring',
			duration: 0.5,
			delay: 2,
		},
	},
};

export const singleCard = {
	hidden: {
		opacity: 0,
		// y: '-100%',
		scaleY: 0,
	},
	visible: {
		opacity: 1,
		// y: 0,
		scaleY: 1,

		transition: {
			type: 'tween',
			duration: 0.2,
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

export const subHeaderVariant = {
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
			mass: 0.8,
			stiffness: 400,
		},
	},
};

export const subtitleVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,

		transition: {
			type: 'spring',
			duration: 1,
			delay: 4.5,
		},
	},
};

export const cardContent = {
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
			delay: 3.5,
			mass: 0.5,
			stiffness: 300,
		},
	},
};

export const exitAnimation = {
	opacity: 0,
	transition: { duration: 0.2 },
};
