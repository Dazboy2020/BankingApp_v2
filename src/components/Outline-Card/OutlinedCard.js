import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function BasicCard({
	accountMovements,
	currency,
	balanceUSD,
	balanceEUR,
}) {
	const totalDepositEuro = accountMovements[0].movements
		.filter((mov) => mov[0] > 0)
		.reduce((acc, mov) => acc + mov[0], 0);

	const totalDepositUSD = accountMovements[1].movementsUSD
		.filter((mov) => mov[0] > 0)
		.reduce((acc, mov) => acc + mov[0], 0)
		.toFixed(2);

	const totalWithdrawalEuro = accountMovements[0].movements
		.filter((mov) => mov[0] < 0)
		.reduce((acc, mov) => acc + mov[0], 0)
		.toFixed(2);

	const totalWithdrawalUSD = Math.abs(
		accountMovements[1].movementsUSD
			.filter((mov) => mov[0] < 0)
			.reduce((acc, mov) => acc + mov[0], 0)
			.toFixed(2)
	);

	return (
		<Card sx={{ display: 'flex', flexGrow: 1, m: 1 }}>
			<CardContent>
				<Typography
					variant="h6"
					color="black"
					sx={{ mb: 0.5, fontWeight: 'bold' }}
				>
					{currency === 'euro'
						? 'Euro Account Details'
						: 'Dollar Account Details'}
				</Typography>
				<Typography sx={{ fontSize: '2rem' }} color="green" gutterBottom>
					{currency === 'euro'
						? `€${balanceEUR.toFixed(2)}`
						: `$${balanceUSD.toFixed(2)}`}
				</Typography>

				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="h6">
						Deposits:
						{currency === 'euro' ? ' €' : ' $'}
						{currency === 'euro' ? totalDepositEuro : totalDepositUSD}
					</Typography>
					<Typography variant="h6">
						Withdrawals:
						{currency === 'euro' ? ' €' : ' $'}
						{currency === 'euro' ? totalWithdrawalEuro : totalWithdrawalUSD}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
}
