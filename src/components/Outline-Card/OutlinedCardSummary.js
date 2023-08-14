import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

export default function BasicCardSummary({
	accountMovements,
	currency,
	balanceUSD,
	balanceEUR,
	setSort,
}) {
	function handleSort() {
		setSort((sort) => !sort);
	}
	const totalDepositEuro = accountMovements[0].movements
		.filter((mov) => mov[0] > 0)
		.reduce((acc, mov) => acc + mov[0], 0);

	const totalDepositUSD = accountMovements[1].movementsUSD
		.filter((mov) => mov[0] > 0)
		.reduce((acc, mov) => acc + mov[0], 0)
		.toFixed(2);

	const totalWithdrawalEuro = Math.abs(
		accountMovements[0].movements
			.filter((mov) => mov[0] < 0)
			.reduce((acc, mov) => acc + mov[0], 0)
			.toFixed(2)
	);

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
					{currency === 'euro' ? 'EUR Account Details' : 'USD Account Details'}
				</Typography>
				<Typography sx={{ fontSize: '2rem' }} color="green" gutterBottom>
					{currency === 'euro'
						? `€${balanceEUR.toFixed(2)}`
						: `$${balanceUSD.toFixed(2)}`}
				</Typography>

				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="h6">
						In :{currency === 'euro' ? ' €' : ' $'}
						{currency === 'euro'
							? totalDepositEuro.toFixed(2)
							: totalDepositUSD.toFixed(2)}
					</Typography>
					<Typography variant="h6">
						Out:
						{currency === 'euro' ? ' €' : ' $'}
						{currency === 'euro'
							? totalWithdrawalEuro.toFixed(2)
							: totalWithdrawalUSD.toFixed(2)}
					</Typography>
				</Box>
				<Box>
					<Button
						variant="contained"
						onClick={handleSort}
						sx={{
							'&:hover': {
								backgroundColor: 'black',
								cursor: 'default',
							},
							bgcolor: '#585054',
							color: 'white',
							mt: 2,
						}}
						size="xs"
						color="inherit"
						startIcon={<SouthOutlinedIcon />}
					>
						Sort
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
