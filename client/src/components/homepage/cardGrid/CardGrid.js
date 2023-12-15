import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { cardTextContent } from './cardText';
import { motion as m } from 'framer-motion';
import { exitAnimation, titleVariant } from '../variants';
import CustomCard from './CustomCard';

function CardGrid() {
	return (
		<Box
			component={m.div}
			// layout="true"
			initial="hidden"
			variants={titleVariant}
			animate="visible"
			exit={exitAnimation}
			// key="grid"
		>
			<Grid
				width="100%"
				container
				rowSpacing={{ xs: 4, s: 4, sm: 8, md: 8, lg: 10 }}
				columnSpacing={{ xs: 5, sm: 5, md: 10, lg: 10 }}
				ml={5}
				mr={5}
				mt={{ xs: 0.1, sm: 2, md: 4, lg: 5 }}
				pb={{ xs: 8, sm: 8, md: 6, lg: 8 }}
			>
				{cardTextContent.map((item) => {
					const cards = Object.values(item);
					return cards.map((card, index) => (
						<CustomCard key={index} content={card} />
					));
				})}
			</Grid>
		</Box>
	);
}

export default CardGrid;
