import { Box, Card, CardContent, Typography } from '@mui/material';
import { useDarkMode } from '../../Hooks/useDarkMode';

function ChartCard({ children, title = 'EXPENSES' }) {
	const { isDarkMode } = useDarkMode();

	return (
		<Card sx={{ width: '100%', borderRadius: '10px', mb: 3 }}>
			<CardContent
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'centre' }}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: '1rem', md: '1.5rem' },
							padding: { xs: '.8rem', md: '.5rem' },
							backgroundColor: isDarkMode ? '#212529' : '#495057',
							color: isDarkMode ? '#d6d3d1' : '#fff',
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
							height: '40vh',
							width: '40vh',
							padding: '1rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: isDarkMode ? '#fff' : '#000',
						}}
					>
						{children}
					</div>
				</Box>
			</CardContent>
		</Card>
	);
}

export default ChartCard;
