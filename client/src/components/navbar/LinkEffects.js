import { Box } from '@mui/system';
import { motion as m } from 'framer-motion';

function LinkEffects() {
	return (
		<Box
			component={m.div}
			initial={{ scale: 0 }}
			animate={{
				opacity: 1,
				scale: [0, 1],
				width: '75%',
				transition: { delay: 0.3, duration: 0.1 },
			}}
			exit={{ scale: [1, 0] }}
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
