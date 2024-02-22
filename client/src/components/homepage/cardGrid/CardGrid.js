import * as React from 'react';
import Grid from '@mui/material/Grid';
import { cardTextContent } from './cardText';
import CustomCard from './CustomCard';

function CardGrid() {
	return (
		<Grid
			container
			rowSpacing={{ xs: 5, s: 5, sm: 5, md: 5, lg: 2 }}
			columnSpacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}
			// mt={{ xs: 0.1, sm: 2, md: 2, lg: 0 }}
			pb={{ xs: 8, sm: 8, md: 6, lg: 6 }}
			// pt={{ xs: 0, sm: 0, md: 0, lg: 0 }}
			sx={{}}
			// mb={{ xs: 8, sm: 8, md: 6, lg: 8 }}
		>
			{cardTextContent.map((card, index) => (
				<CustomCard key={index} card={card} />
			))}
		</Grid>
	);
}

export default CardGrid;
