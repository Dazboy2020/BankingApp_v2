import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDarkMode } from '../../Hooks/useDarkMode';

function CustomCard({ transactionType, transactionTotal, icon }) {
	const { isDarkMode } = useDarkMode();
	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: 2,
				borderRadius: '10px',
			}}
		>
			<CardContent sx={{ width: '100%' }}>
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
							mb: 0.5,
							fontWeight: 'bold',
							// color: '#242a2e'
							color: isDarkMode ? '#d6d3d1' : '#000',
						}}
					>
						{transactionType}
					</Typography>
					{icon}
				</Box>
				<Typography
					sx={{ fontSize: '2rem', color: isDarkMode ? '#fff' : '#000' }}
					gutterBottom
				>
					{transactionTotal}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CustomCard;
