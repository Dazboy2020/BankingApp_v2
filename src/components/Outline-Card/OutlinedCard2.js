import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import CachedIcon from '@mui/icons-material/SyncAlt';

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
];

const BasicCardFX = () => {
	const [amountFx, setAmountFX] = useState('');
	const [fxFrom, setFxFrom] = useState('');
	const [fxTo, setFxTo] = useState('');

	function handleAmountFx(e) {
		setAmountFX(+e.target.value);
	}

	function handleFxFrom(e) {
		setFxFrom(e.target.value);

		if (fxFrom === 'USD') {
			setFxTo('EUR');
		}
	}

	useEffect(() => {
		fxFrom === 'EUR' ? setFxTo('USD') : setFxTo('EUR');
	}, [fxFrom]);

	return (
		<Card
			sx={{
				display: 'flex',
				flexGrow: 1,
				m: 1,
				// alignItems: 'center',
				alignItems: 'flex-start',
			}}
		>
			<CardContent>
				<Box>
					<Typography
						variant="h6"
						color="black"
						sx={{ mb: 2, fontWeight: 'bold' }}
					>
						Currency FX:
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
					}}
				>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						{/* //! Amount */}
						<Box
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<form component="form">
								<TextField
									onChange={handleAmountFx}
									id="outlined-select-currency"
									// select
									label="amount"
									value={amountFx}
									helperText="Select amount"
									color="secondary"
								></TextField>
								{/* <input onSubmit={() => handleReturn}></input> */}
							</form>
						</Box>
						{/* {//! From */}

						<Box
							component="form"
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								id="outlined-select-currency"
								select
								label="Select"
								value={fxFrom}
								helperText="From"
								onChange={handleFxFrom}
								color="secondary"
							>
								{currencies.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>

						{/*//! To */}

						<Box
							component="form"
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								id="outlined-select-currency"
								select
								label="Select"
								value={fxTo}
								helperText="To"
								// onChange={handleChange}
								color="secondary"
								// disabled="true"
							>
								{currencies.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>
					</Box>
				</Box>
				<Box>
					<Button
						// onClick={handleTransferSubmit}
						startIcon={<CachedIcon color="white" sx={{ ml: 1 }} />}
						sx={{
							'&:hover': {
								backgroundColor: 'black',
								cursor: 'default',
							},
							bgcolor: '#585054',
							color: 'white',
							mt: 4,
						}}
					>
						Exchange
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default BasicCardFX;
