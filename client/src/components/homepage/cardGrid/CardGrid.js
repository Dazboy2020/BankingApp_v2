import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import CardText from './cardcontent/CardText';
import { cardTextContent } from './cardcontent/CardText';

function CardGrid({ content }) {
	const boxStyling = {
		padding: 3,
	};

	function CustomCard({ content }) {
		return (
			<Grid key={content.text} item xs={12} sm={6} md={6} lg={4}>
				<Card
					sx={{
						borderRadius: '10px',
					}}
				>
					<CardContent sx={{ p: 0 }}>
						<Box sx={boxStyling}>
							<CardText header={content.header} text={content.text} />{' '}
						</Box>
					</CardContent>
				</Card>
			</Grid>
		);
	}

	return (
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
	);
}

export default CardGrid;
