import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, MenuItem, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

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

export default function BasicCardTransaction({
	accounts,
	user,
	accountMovements,
	setAccountMovements,
	balanceUSD,
	balanceEUR,
	setOpenToast,
}) {
	const users = accounts.map((user) => {
		return user[0].owner;
	});

	const recipient = users.filter((item) => item !== user);

	const [currency, setCurrency] = useState('EUR');
	const [targetUser, setTargetUser] = useState(
		recipient.length > 1 ? recipient[0] : recipient
	);
	const [transferAmount, setTransferAmount] = useState('');

	function handleChange(e) {
		setCurrency(e.target.value);
	}

	function handleUser(e) {
		setTargetUser(e.target.value);
	}

	function handleTransferAmount(e) {
		e.preventDefault();
		setTransferAmount(e.target.value);
	}

	function handleReturn(e) {
		e.preventDefault();
		return;
	}

	function handleTransferSubmit(e) {
		e.preventDefault();

		if (transferAmount < 0) return;

		const updatedMovementsEUR = accountMovements[0].movements.map(
			(movement) => movement
		);
		const updatedMovementsUSD = accountMovements[1].movementsUSD.map(
			(movement) => movement
		);

		const recieverAcc = accounts.find((acc) => acc[0].owner === targetUser);
		console.log(recieverAcc);

		if (
			currency === 'EUR' &&
			recieverAcc &&
			transferAmount &&
			balanceEUR >= +transferAmount &&
			+transferAmount > 0
		) {
			updatedMovementsEUR.unshift([
				-transferAmount,
				new Date().toLocaleDateString(),
			]) &&
				recieverAcc[0].movements.unshift([
					+transferAmount,
					new Date().toLocaleDateString(),
				]);
		} else if (
			currency === 'USD' &&
			recieverAcc &&
			+transferAmount &&
			balanceUSD >= +transferAmount &&
			+transferAmount > 0
		) {
			updatedMovementsUSD.unshift([
				-transferAmount,
				new Date().toLocaleDateString(),
			]) &&
				recieverAcc[1].movementsUSD.unshift([
					+transferAmount,
					new Date().toLocaleDateString(),
				]);
		} else {
			return;
		}

		let updatedAccount;
		currency === 'EUR'
			? (updatedAccount = [
					{
						...accountMovements[0],
						movements: updatedMovementsEUR,
					},
					{
						...recieverAcc[1],
						movementsUSD: updatedMovementsUSD,
					},
			  ])
			: (updatedAccount = [
					{
						...accountMovements[0],
						movements: updatedMovementsEUR,
					},
					{
						...recieverAcc[1],
						movementsUSD: updatedMovementsUSD,
					},
			  ]);

		setAccountMovements(updatedAccount);
		setTransferAmount('');
		setTargetUser('');
		setOpenToast(true);
	}

	return (
		<Card
			sx={{
				display: 'flex',
				flexGrow: 1,
				m: 1,
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
						Transfer Money:
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Stack
						direction={{ md: 'column', lg: 'row' }}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							// flexDirection: 'column',
						}}
					>
						{/* {//! Currency */}

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
								value={currency}
								helperText="Select currency"
								onChange={handleChange}
								color="secondary"
							>
								{currencies.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>

						{/*//! USER */}

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
								// defaultValue=""
								value={targetUser}
								helperText="Select reciever"
								onChange={handleUser}
								color="secondary"
							>
								{recipient.map((user, i) => (
									<MenuItem key={i} value={user}>
										{user}
									</MenuItem>
								))}
							</TextField>
						</Box>

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
									onChange={handleTransferAmount}
									type="number"
									id="outlined-select-currency"
									// select
									label="amount"
									value={transferAmount}
									helperText="Select amount"
									color="secondary"
								></TextField>
							</form>
						</Box>
					</Stack>
				</Box>
				<Box>
					<Button
						onClick={handleTransferSubmit}
						startIcon={<SyncAltIcon color="white" sx={{ ml: 1 }} />}
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
						Transfer
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
