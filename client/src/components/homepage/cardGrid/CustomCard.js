import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { motion as m } from 'framer-motion';
import {
	singleCard,
	headerVariant,
	cardContent,
	cardContentMobile,
	singleCardMobile,
} from '../variants';

import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function CustomCard({ card, index }) {
	const cardStyle = {
		p: 3,
		minHeight: { xs: '15rem', md: '100%', lg: '15rem' },
		backgroundColor: '#171413',
		color: 'antiquewhite',
		boxShadow: '0px 0px 20px 0px rgba(247, 7, 118)',
		borderRadius: '10px',
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		'&:hover': {
			backgroundColor: '#0a0a0a',
		},
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid key={card.header} item xs={12} sm={6} md={6} lg={3} sx={{ pt: 0 }}>
			<Card
				component={m.div}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={isMobile ? singleCardMobile : singleCard}
				custom={index}
				sx={cardStyle}
			>
				<CardContent>
					<Box initial="false" animate="visible" variants={headerVariant}>
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
						whileInView="visible"
						variants={isMobile ? cardContentMobile : cardContent}
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
