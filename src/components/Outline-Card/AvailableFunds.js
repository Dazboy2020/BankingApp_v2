import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useAppContext } from '../../context/context';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

// import { useEffect } from 'react';
export default function AvailbleFunds() {
	const { totalExpenses, totalIncome } = useAppContext();

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: 0.5,
			}}
		>
			<CardContent sx={{ width: '100%' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexFlow: 1,
					}}
				>
					<Typography
						variant="h5"
						color="primary"
						sx={{ mb: 0.5, fontWeight: 'bold' }}
					>
						Available Funds
					</Typography>
					<AccountBalanceIcon sx={{ color: 'grey', fontSize: 80 }} />
				</Box>
				<Typography sx={{ fontSize: '2rem', color: 'green' }} gutterBottom>
					{`€${(totalIncome + totalExpenses).toFixed(2)}`}
				</Typography>
			</CardContent>
		</Card>
	);
}
