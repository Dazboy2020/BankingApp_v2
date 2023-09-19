import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../context/context';
import { Box } from '@mui/material';

import PaidIcon from '@mui/icons-material/Paid';

export default function Income() {
	const { totalIncome } = useAppContext();

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
						Total Income
					</Typography>
					<PaidIcon
						sx={{ color: 'green', fontSize: { xs: '50px', sm: '60px' } }}
					/>
				</Box>
				<Typography sx={{ fontSize: '2rem' }} color="green" gutterBottom>
					{`€${totalIncome.toFixed(2)}`}
				</Typography>
			</CardContent>
		</Card>
	);
}
