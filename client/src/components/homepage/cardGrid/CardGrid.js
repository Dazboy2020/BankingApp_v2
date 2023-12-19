import * as React from 'react';
import Grid from '@mui/material/Grid';
import { cardTextContent } from './cardText';
import CustomCard from './CustomCard';

function CardGrid() {
	return (
		<Grid
			container
			rowSpacing={{ xs: 4, s: 4, sm: 8, md: 8, lg: 10 }}
			columnSpacing={{ xs: 5, sm: 5, md: 10, lg: 5 }}
			mt={{ xs: 0.1, sm: 2, md: 4, lg: 0 }}
			pb={{ xs: 8, sm: 8, md: 6, lg: 8 }}
			// mb={{ xs: 8, sm: 8, md: 6, lg: 8 }}
		>
			{cardTextContent.map((card, index) => (
				<CustomCard key={index} card={card} />
			))}
		</Grid>
	);
}

export default CardGrid;
