import {
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
	cardMediaClasses,
} from '@mui/material';
import { motion as m } from 'framer-motion';
import { cardTextVariant, headerVariant } from '../variants';

function CustomCard({ card, index }) {
	return (
		<Grid key={cardMediaClasses.text} item xs={12} sm={6} md={6} lg={4}>
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
						variants={cardTextVariant}
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
