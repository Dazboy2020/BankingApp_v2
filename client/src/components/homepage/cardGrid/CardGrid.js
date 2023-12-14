import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import CardText from './cardcontent/CardText';

function CardGrid() {
	const boxStyling = {
		padding: 3,
	};

	function CustomCard({ children }) {
		return (
			<Card
				sx={{
					borderRadius: '10px',
				}}
			>
				<CardContent sx={{ p: 0 }}>{children}</CardContent>
			</Card>
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
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<CustomCard>
					<Box sx={boxStyling}>
						<CardText />
					</Box>
				</CustomCard>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<CustomCard>
					<Box sx={boxStyling}>
						<CardText />
					</Box>
				</CustomCard>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<CustomCard>
					<Box sx={boxStyling}>
						<CardText />
					</Box>
				</CustomCard>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<CustomCard>
					<Box sx={boxStyling}>
						<CardText />
					</Box>
				</CustomCard>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<CustomCard>
					<Box sx={boxStyling}>
						<CardText />
					</Box>
				</CustomCard>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<CustomCard>
					<Box sx={boxStyling}>
						<CardText />
					</Box>
				</CustomCard>
			</Grid>
		</Grid>
	);
}

export default CardGrid;
