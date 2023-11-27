import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDarkMode } from '../../hooks/useDarkMode';

function CustomCard({ transactionType, transactionTotal, icon }) {
	const { isDarkMode } = useDarkMode();
	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: { xs: 1.5, s: 2 },
				borderRadius: '10px',
				// width: { md: '100%', lg: '30%' },
			}}
		>
			<CardContent sx={{ width: '100%', p: 1 }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexFlow: 1,
					}}
				>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 'bold',
							color: isDarkMode ? '#d6d3d1' : '#000',
						}}
					>
						{transactionType}
					</Typography>
					{icon}
				</Box>
				<Typography
					sx={{ fontSize: '2rem', color: isDarkMode ? '#fff' : '#000' }}
				>
					{transactionTotal}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CustomCard;
