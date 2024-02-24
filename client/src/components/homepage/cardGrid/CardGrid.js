import * as React from 'react';
import Grid from '@mui/material/Grid';
import { cardTextContent } from './cardText';
import CustomCard from './CustomCard';

function CardGrid() {
	return (
		<Grid
			container
			rowSpacing={{ xs: 8, s: 8, sm: 8, md: 8, lg: 2 }}
			columnSpacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}
			pb={{ xs: 8, sm: 8, md: 6, lg: 6 }}
		>
			{cardTextContent.map((card, index) => (
				<CustomCard key={index} card={card} index={index} />
			))}
		</Grid>
	);
}

export default CardGrid;
