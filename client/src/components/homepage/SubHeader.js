import { Box } from '@mui/material';
import expense_light from '../../assets/expense_light.png';
import { motion as m } from 'framer-motion';
import { exitAnimation, subHeaderVariant } from './variants';

function SubHeader() {
	return (
		<Box
			component={m.div}
			layout="true"
			initial="hidden"
			variants={subHeaderVariant}
			animate="visible"
			exit={exitAnimation}
			sx={{
				maxWidth: '100%',
				maxHeight: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<img
				src={expense_light}
				alt="expense_light"
				style={{
					width: '80%',
					height: '80%',
					objectFit: 'contain',
				}}
			/>
		</Box>
	);
}

export default SubHeader;
