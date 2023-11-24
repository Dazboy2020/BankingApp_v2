import { Box } from '@mui/material';
import classes from './pie_wrapper.module.css';

function NoData({ src, title }) {
	return (
		<Box sx={{ margin: 'auto' }} className={classes.animate}>
			<p style={{ textAlign: 'center', padding: '.5rem' }}>{title}</p>
			<img
				style={{
					width: '35',
					height: '35vh',
					objectFit: '-moz-initial',
				}}
				src={src}
				alt="finance"
			/>
		</Box>
	);
}

export default NoData;
