import { easeInOut } from 'framer-motion';

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
			bounce: 0.2,
			opacity: { ease: easeInOut },
		},
	}),
};

export const exitAnimation = {
	scale: 0,
	opacity: 0,
	transition: {
		type: 'spring',
		bounce: 0,
	},
};
