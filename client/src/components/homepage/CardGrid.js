import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';

function CardGrid() {
	const boxStyling = {
		padding: 5,
	};

	const text =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.';
	return (
		<Grid
			width="100%"
			container
			rowSpacing={10}
			columnSpacing={{ xs: 5, sm: 5, md: 10, lg: 15 }}
			ml={5}
			mr={5}
			mt={5}
		>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Card>
					<Box sx={boxStyling}>{text}</Box>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Card>
					<Box sx={boxStyling}>{text}</Box>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Card>
					<Box sx={boxStyling}>{text}</Box>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Card>
					<Box sx={boxStyling}>{text}</Box>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Card>
					<Box sx={boxStyling}>{text}</Box>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Card>
					<Box sx={boxStyling}>{text}</Box>
				</Card>
			</Grid>
		</Grid>
	);
}

export default CardGrid;
