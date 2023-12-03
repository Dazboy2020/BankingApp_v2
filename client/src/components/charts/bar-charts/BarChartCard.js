import { useDarkMode } from '../../../hooks/useDarkMode';
import { useTheme } from '@emotion/react';
import { Card, CardContent, Typography } from '@mui/material';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from 'chart.js';

ChartJS.register(
	BarElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function BarChartCard({ children, title }) {
	const { isDarkMode } = useDarkMode();
	const theme = useTheme();

	return (
		<Card
			sx={{
				width: '100%',
				mb: 3,
				[theme.breakpoints.down('sm')]: {
					height: '100vh',
				},
			}}
		>
			<CardContent
				sx={{
					[theme.breakpoints.down('sm')]: {
						height: '100vh',
					},
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					margin: 'auto',
					height: '80vh',
					width: 'auto',
				}}
			>
				<Typography
					variant="h5"
					sx={{
						padding: '1rem',
						backgroundColor: isDarkMode ? '#212529' : '#495057',
						color: '#fff',
						textAlign: 'center',
						letterSpacing: '.1rem',
						borderRadius: '8px',
						fontWeight: 'bold',
					}}
				>
					{title}
				</Typography>
				<div
					className="canvas"
					style={{
						display: 'flex',
						flexGrow: 1,
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						padding: '1rem',
					}}
				>
					{children}
				</div>
			</CardContent>
		</Card>
	);
}

export default BarChartCard;
