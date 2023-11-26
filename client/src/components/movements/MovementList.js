import { Stack } from '@mui/material';
import React from 'react';
// import Movements from './Movements';

const MovementList = ({ children }) => {
	return (
		<section>
			<Stack
				spacing={4}
				component="section"
				direction={{ xs: 'column', md: 'row' }}
				sx={{ backgroundColor: '#343a40' }}
			>
				{children}
			</Stack>
		</section>
	);
};

export default MovementList;
