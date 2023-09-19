import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ExpenseSummary() {
	const { totalExpenses } = useAppContext();

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: 2,
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
						sx={{ mb: 0.5, fontWeight: 'bold', color: '#242a2e' }}
					>
						Total Expenses
					</Typography>
					<ShoppingCartIcon
						sx={{ color: 'red', fontSize: { xs: '50px', sm: '60px' } }}
					/>
				</Box>
				<Typography sx={{ fontSize: '2rem' }} color="red" gutterBottom>
					{`€${Math.abs(totalExpenses.toFixed(2))}`}
				</Typography>
			</CardContent>
		</Card>
	);
}
