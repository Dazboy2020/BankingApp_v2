import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import { useAppContext } from '../../context/context';

export default function ExpenseSummary({
	accountMovements,
	currency,
	// totalExpenses,
	totalIncome,
	setSort,
}) {
	const { totalExpenses } = useAppContext();
	function handleSort() {
		setSort((sort) => !sort);
	}

	return (
		<Card
			component="article"
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
					Total Expenses
				</Typography>
				<Typography sx={{ fontSize: '2rem' }} color="red" gutterBottom>
					{`€${Math.abs(totalExpenses.toFixed(2))}`}
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
							fontSize: '1.2rem',
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
