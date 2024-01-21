import { Box } from '@mui/material';
import classes from '../pie-charts/pie_wrapper.module.css';
import { useDarkMode } from '../../../hooks/useDarkMode';

function NoData({ src, title }) {
	const { isDarkMode } = useDarkMode();

	return (
		<Box sx={{ margin: 'auto' }} className={classes.animate}>
			<p
				style={{
					textAlign: 'center',
					padding: '.5rem',
					color: isDarkMode ? '#d6d3d1' : '#000',
				}}
			>
				{title}
			</p>
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
