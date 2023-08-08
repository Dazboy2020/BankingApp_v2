import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { TextField, MenuItem, Typography, FormControl } from '@mui/material';
import { useState } from 'react';

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

export default function BasicCardTransaction({ accounts, user }) {
	const users = accounts.map((user) => {
		return user[0].owner;
	});

	const recipient = users.filter((item) => item !== user);

	const [currency, setCurrency] = useState('EUR');
	const [targetUser, setTargetUser] = useState(recipient);

	function handleChange(e) {
		setCurrency(e.target.value);
	}

	function handleUser(e) {
		if (e.target.value === user) return;
		setTargetUser(e.target.value);
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
						Transfer Money to another user:
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						// flexDirection: 'column',
						// alignItems: 'centre',
					}}
				>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
								defaultValue={currency}
								helperText="Select currency"
								onChange={handleChange}
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
							<FormControl>
								<TextField
									id="outlined-select-currency"
									select
									label="Select"
									defaultValue={recipient[0]}
									helperText="Select reciever"
									onChange={handleUser}
								>
									{recipient.map((user, i) => (
										<MenuItem key={i} value={user}>
											{user}
										</MenuItem>
									))}
								</TextField>
							</FormControl>
						</Box>

						{/* //! Amount */}

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
								// select
								label="amount"
								defaultValue=""
								helperText="Please select amount"
							>
								<input
									type="number"
									// className={classes.form__input}
									// onChange={(e) => setTransferRecipient(e.target.value)}
									// value={transferRecipient}
								/>
							</TextField>
						</Box>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
