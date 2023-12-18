import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import { singleCard, headerVariant, cardContent } from '../variants';

function CustomCard({ card, index }) {
	return (
		<Grid key={card.header} item xs={12} sm={6} md={6} lg={4}>
			<Card
				component={m.div}
				initial="hidden"
				variants={singleCard}
				animate="visible"
				custom={index}
				sx={{
					borderRadius: '10px',
					p: 4,
				}}
			>
				<CardContent sx={{ p: 0 }}>
					<Box
						component={m.div}
						initial="hidden"
						variants={headerVariant}
						animate="visible"
					>
						<Typography sx={{ fontFamily: 'system-ui', mb: 1 }} variant="h6">
							{card.header}
						</Typography>
					</Box>
					<Box
						component={m.div}
						initial="hidden"
						variants={cardContent}
						animate="visible"
						custom={index}
					>
						<Typography variant="h7">{card.text}</Typography>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default CustomCard;
