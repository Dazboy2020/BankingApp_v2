import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import { singleCard, headerVariant, cardContent } from '../variants';

function CustomCard({ card, index }) {
	return (
		<Grid key={card.header} item xs={12} sm={6} md={6} lg={3} sx={{ pt: 0 }}>
			<Card
				component={m.div}
				initial="hidden"
				variants={singleCard}
				animate="visible"
				custom={index}
				sx={{
					borderRadius: '0px',
					p: 2,
					minHeight: '100%',
					backgroundColor: '#000',
					color: 'antiquewhite',
					borderLeft: '1px solid #f70776',
				}}
			>
				<CardContent>
					<Box
						sx={{ p: 0 }}
						component={m.div}
						initial="hidden"
						variants={headerVariant}
						animate="visible"
					>
						<Typography
							sx={{
								fontFamily: 'system-ui',
								mb: 1,
								minHeight: { xs: '1rem', md: '1.5rem', lg: '2rem' },
							}}
							variant="h6"
						>
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
