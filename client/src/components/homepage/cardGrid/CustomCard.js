import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import { singleCard, headerVariant, cardContent } from '../variants';

function CustomCard({ card, index }) {
	const cardStyle = {
		p: 3,
		minHeight: { xs: '15rem', md: '100%', lg: '15rem' },
		backgroundColor: '#171413',
		color: 'antiquewhite',
		border: '1px solid #f70776',
		boxShadow: '0px 0px 5px 5px rgba(247, 7, 118)',
		borderRadius: '10px',
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		'&:hover': {
			backgroundColor: '#0a0a0a',
			borderRadius: 0,
			boxShadow: '0px 0px 7px 7px rgba(247, 7, 100)',
		},
	};
	return (
		<Grid key={card.header} item xs={12} sm={6} md={6} lg={3} sx={{ pt: 0 }}>
			<Card
				component={m.div}
				initial="hidden"
				variants={singleCard}
				animate="visible"
				custom={index}
				sx={cardStyle}
			>
				<CardContent>
					<Box
						component={m.div}
						initial="hidden"
						variants={headerVariant}
						animate="visible"
					>
						<span>{card.icon}</span>
						<Typography
							sx={{
								fontFamily: 'system-ui',
								mb: 1,
								minHeight: { xs: '1rem', md: '1.5rem', lg: '2rem' },
								textAlign: 'left',
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
