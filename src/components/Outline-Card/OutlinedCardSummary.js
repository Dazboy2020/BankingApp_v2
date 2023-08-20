import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

export default function BasicCardSummary({
	accountMovements,
	currency,
	totalExpenses,
	totalIncome,
	setSort,
}) {
	function handleSort() {
		setSort((sort) => !sort);
	}

	return (
		<Card sx={{ display: 'flex', flexGrow: 1, mr: 1, mb: 0.5 }}>
			<CardContent>
				<Typography
					variant="h6"
					color="black"
					sx={{ mb: 0.5, fontWeight: 'bold' }}
				>
					{currency === 'euro' ? 'Total Income' : 'Total Expenses'}
				</Typography>
				<Typography sx={{ fontSize: '2rem' }} color="green" gutterBottom>
					{currency === 'euro'
						? `€${totalIncome.toFixed(2)}`
						: `€${Math.abs(totalExpenses).toFixed(2)}`}
				</Typography>

				<Box>
					<Button
						variant="contained"
						onClick={handleSort}
						sx={{
							'&:hover': {
								backgroundColor: 'black',
								cursor: 'default',
							},
							bgcolor: '#d64045',
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
