import { useTheme } from '@emotion/react';
import { Card, CardContent, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
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
import { useDarkMode } from '../../../hooks/useDarkMode';

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

function BarChartCard({ userData, options, title }) {
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
						color: isDarkMode ? '#d6d3d1' : '#fff',
						textAlign: 'center',
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
					<Bar data={userData} options={options} />
				</div>
			</CardContent>
		</Card>
	);
}

export default BarChartCard;
