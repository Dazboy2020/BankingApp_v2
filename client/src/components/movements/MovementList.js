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
				sx={{ width: '100%' }}
			>
				{children}
			</Stack>
		</section>
	);
};

export default MovementList;
