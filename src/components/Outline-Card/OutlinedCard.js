import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({
	accountMovements,
	currency,
	balanceUSD,
	balanceEUR,
}) {
	return (
		<Card sx={{ display: 'flex', flexGrow: 1, m: 1 }}>
			<CardContent>
				<Typography sx={{ fontSize: '2rem' }} color="green" gutterBottom>
					{/* {balanceEUR.toFixed(2)} */}
					{currency === 'euro'
						? `€${balanceEUR.toFixed(2)}`
						: `$${balanceUSD.toFixed(2)}`}
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
		</Card>
	);
}
