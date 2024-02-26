import { useDarkMode } from '../../hooks/useDarkMode';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function CustomCard({ TransactionTypeCard, transactionTotal, icon }) {
	const { isDarkMode } = useDarkMode();

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: { xs: 1.5, s: 2 },
				borderRadius: '10px',
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
						variant="h6"
						sx={{
							fontWeight: 'bold',
							color: isDarkMode ? '#d6d3d1' : '#000',
						}}
					>
						{TransactionTypeCard}
					</Typography>
					{icon}
				</Box>
				<Typography
					sx={{ fontSize: '1.5rem', color: isDarkMode ? '#fff' : '#000' }}
				>
					{transactionTotal}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CustomCard;
