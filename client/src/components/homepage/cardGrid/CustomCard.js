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
					p: 3,
					minHeight: { xs: '15rem', md: '100%', lg: '15rem' },
					backgroundColor: '#171413',
					color: 'antiquewhite',
					border: '2px solid #f70776',
					boxShadow: '0px 0px 10px 0px rgba(247, 7, 118)',
					borderRadius: '10px',
					display: 'flex',
					flexGrow: 1,
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
				}}
			>
				<CardContent>
					<Box
						sx={
							{
								// p: 3,
							}
						}
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
								textAlign: 'left', // Center the header text
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
						<Typography variant="h7" sx={{ textAlign: 'center' }}>
							{card.text}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default CustomCard;
