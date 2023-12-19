import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import { singleCard, headerVariant, cardContent } from '../variants';

function CustomCard({ card, index }) {
	return (
		<Grid key={card.header} item xs={12} sm={6} md={6} lg={3}>
			<Card
				component={m.div}
				initial="hidden"
				variants={singleCard}
				animate="visible"
				custom={index}
				sx={{
					borderRadius: '10px',
					p: 2,
					pt: 4,
					pb: 4,
					minHeight: '100%',
					backgroundColor: '#E5E7EB',
					boxShadow: '5px 5px 28px 0px rgba(181,139,181,1)',
					'&:hover': {
						backgroundColor: '#FAFAFA',
						pt: 1,
						pb: 1,
					},
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
