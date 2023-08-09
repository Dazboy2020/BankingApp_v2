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

const BasicCardFX = ({
	accountMovements,
	balanceUSD,
	balanceEUR,
	setAccountMovements,
}) => {
	const [amountFx, setAmountFX] = useState('');
	const [fxFrom, setFxFrom] = useState('');
	const [fxTo, setFxTo] = useState('');

	const updatedMovementsEUR = accountMovements[0].movements.map(
		(movement) => movement
	);
	const updatedMovementsUSD = accountMovements[1].movementsUSD.map(
		(movement) => movement
	);

	function handleReturn(e) {
		e.preventDefault();
		return;
	}

	function handleAmountFx(e) {
		setAmountFX(e.target.value);
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

	function handleFxSubmit(e) {
		e.preventDefault();
		if (+amountFx <= 0) return;

		if (fxFrom === 'EUR' && +amountFx < balanceEUR) {
			updatedMovementsEUR.unshift([
				-amountFx,
				new Date().toLocaleDateString(),
			]) &&
				updatedMovementsUSD.unshift([
					+amountFx * 1.06,
					new Date().toLocaleDateString(),
				]);
		}

		if (fxFrom !== 'EUR' && +amountFx < balanceUSD) {
			updatedMovementsUSD.unshift([-amountFx, new Date().toLocaleDateString()]);
			updatedMovementsEUR.unshift([
				+amountFx * 0.94,
				new Date().toLocaleDateString(),
			]);
		}

		let updatedAccount;
		fxFrom === 'EUR'
			? (updatedAccount = [
					{
						...accountMovements[0],
						movements: updatedMovementsEUR,
					},
					{
						...accountMovements[1],
						movementsUSD: updatedMovementsUSD,
					},
			  ])
			: (updatedAccount = [
					{
						...accountMovements[0],
						movements: updatedMovementsEUR,
					},
					{
						...accountMovements[1],
						movementsUSD: updatedMovementsUSD,
					},
			  ]);

		setAccountMovements(updatedAccount);
		setAmountFX('');
	}

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
							<form component="form" onSubmit={handleReturn}>
								<TextField
									onChange={handleAmountFx}
									id="outlined-select-currency"
									type="number"
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
								disabled
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
						onClick={handleFxSubmit}
					>
						Exchange
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default BasicCardFX;
