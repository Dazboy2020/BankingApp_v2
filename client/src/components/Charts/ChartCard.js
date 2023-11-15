import { Box, Card, CardContent, Typography } from '@mui/material';

function ChartCard({ children, title = 'EXPENSES' }) {
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
							backgroundColor: '#495057',
							color: 'white',
							textAlign: 'center',
							letterSpacing: '.1rem',
							borderRadius: '8px',
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
