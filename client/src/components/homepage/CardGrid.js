import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';

function CardGrid() {
	const boxStyling = {
		padding: 5,
	};
	return (
		<Box
			sx={{
				mt: 5,
				ml: { xs: 5, s: 12, md: 12, lg: 15 },
				mr: { xs: 5, s: 12, md: 12, lg: 15 },
			}}
		>
			<Grid
				width="100%"
				container
				rowSpacing={10}
				columnSpacing={{ xs: 5, sm: 5, md: 10, lg: 15 }}
				ml={5}
				mr={5}
			>
				<Grid item xs={12} sm={6} md={6} lg={4}>
					<Card>
						<Box sx={boxStyling}>1</Box>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={4}>
					<Card>
						<Box sx={boxStyling}>2</Box>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={4}>
					<Card>
						<Box sx={boxStyling}>3</Box>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={4}>
					<Card>
						<Box sx={boxStyling}>1</Box>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={4}>
					<Card>
						<Box sx={boxStyling}>2</Box>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={4}>
					<Card>
						<Box sx={boxStyling}>3</Box>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}

export default CardGrid;
