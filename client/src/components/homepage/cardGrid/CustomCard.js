import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import { cardTextVariant } from '../variants';

function CustomCard({ content }) {
	return (
		<Grid key={content.text} item xs={12} sm={6} md={6} lg={4}>
			<Card
				sx={{
					borderRadius: '10px',
					p: 4,
				}}
			>
				<CardContent sx={{ p: 0 }}>
					<Box
						component={m.div}
						initial="hidden"
						variants={cardTextVariant}
						animate="visible"
						key="text"
					>
						<Typography sx={{ fontFamily: 'system-ui', mb: 1 }} variant="h6">
							{content.header}
						</Typography>
						<Typography variant="h7">{content.text}</Typography>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default CustomCard;
