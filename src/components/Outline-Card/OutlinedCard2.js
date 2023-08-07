import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCardCreditCard() {
	return (
		<Card sx={{ display: 'flex', flexGrow: 1, m: 1 }}>
			<CardContent>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography sx={{ color: 'red' }} variant="h4" gutterBottom>
						Credit Card
					</Typography>
					<Typography sx={{ fontWeight: 'bold' }} variant="h5" component="div">
						A range of credit cards to suit your needs.
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						You must be 18 years or older to apply for a credit card.
					</Typography>
					<Typography variant="body2">
						Credit subject to status. Terms and conditions apply.
					</Typography>
				</Box>
				<Box>
					<Button
						size="xs"
						variant="contained"
						sx={{
							'&:hover': {
								backgroundColor: 'black',
								cursor: 'default',
							},
							bgcolor: '#585054',
							color: 'white',
							mt: 4,
						}}
						color="inherit"

						// startIcon={<SouthOutlinedIcon />}
					>
						Find out more
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
