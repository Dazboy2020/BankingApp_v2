import { Stack } from '@mui/material';
import React from 'react';
// import Movements from './Movements';

const MovementList = ({ children }) => {
	return (
		<section>
			<Stack
				sx={{ ml: 4, mr: 4, mt: 4 }}
				spacing={4}
				component="section"
				direction={{ xs: 'column', md: 'row' }}
			>
				{children}
			</Stack>
		</section>
	);
};

export default MovementList;
