import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ accountMovements }) {
	const balanceEUR = accountMovements[0].movements.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	return (
		<Card sx={{ display: 'flex', flexGrow: 1, m: 1 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Word of the Day {balanceEUR.toFixed(2)}
				</Typography>

				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			{/* <CardActions>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
}
