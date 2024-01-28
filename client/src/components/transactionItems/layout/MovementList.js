import { Stack } from '@mui/material';
import React from 'react';

const MovementList = ({ children }) => {
	return (
		<section>
			<Stack
				spacing={4}
				component="section"
				direction={{ xs: 'column', md: 'column', lg: 'row' }}
				sx={{ width: '100%', mt: 3 }}
			>
				{children}
			</Stack>
		</section>
	);
};

export default MovementList;
