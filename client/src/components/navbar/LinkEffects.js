import { Box } from '@mui/system';
import { motion as m } from 'framer-motion';

function LinkEffects({ index }) {
	function underlineWidth() {
		if (index === 0) return '60%';
		if (index === 1) return '60%';
		if (index === 2) return '75%';
	}
	return (
		<Box
			layoutId="tab-indicator"
			component={m.div}
			initial={{ scale: 0, opacity: 0 }}
			animate={{
				opacity: 1,
				scale: 1,
				width: underlineWidth(),
				transition: { delay: 0.3, duration: 0.1 },
			}}
			exit={{ scale: 0, opacity: 0 }}
			sx={{
				height: '2px',
				backgroundColor: '#f70776',
				position: 'absolute',
				bottom: 0,
				marginLeft: 'auto',
			}}
		/>
	);
}

export default LinkEffects;
