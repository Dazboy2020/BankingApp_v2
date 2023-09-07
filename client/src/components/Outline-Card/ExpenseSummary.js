import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import { useAppContext } from '../../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ExpenseSummary() {
	const { totalExpenses, dispatch } = useAppContext();

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

				<Box>
					<Button
						variant="contained"
						onClick={() => dispatch({ type: 'sort' })}
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
