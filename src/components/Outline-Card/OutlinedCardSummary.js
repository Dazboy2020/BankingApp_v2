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
		<Card
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: 0.5,
			}}
		>
			<CardContent>
				<Typography
					variant="h4"
					color="primary"
					sx={{ mb: 0.5, fontWeight: 'bold' }}
				>
					Total Income
				</Typography>
				<Typography sx={{ fontSize: '2rem' }} color="green" gutterBottom>
					{`€${totalIncome.toFixed(2)}`}
				</Typography>

				<Box>
					<Button
						variant="contained"
						onClick={handleSort}
						sx={{
							'&:hover': {
								backgroundColor: '#680747',
								cursor: 'default',
							},
							bgcolor: '#f70776',
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
