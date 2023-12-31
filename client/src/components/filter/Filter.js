import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Stack } from '@mui/material';
import DateMenu from './DateMenu';
// import FilterInputBox from './FilterInputBox';

const FilterItems = () => {
	const { isDarkMode } = useDarkMode();

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				mb: 2,
				// alignItems: 'flex-start',
				borderRadius: '10px',
				p: 0,
			}}
		>
			<CardContent
				sx={{
					width: '100%',
					display: 'flex',

					// flexDirection: { xs: 'column', sm: 'row' },
					alignItems: { xs: 'center', sm: 'center' },
					justifyContent: 'space-between',

					// p: { xs: 1, sm: 1.5 },
				}}
			>
				<Typography
					sx={{
						fontFamily: 'poppins',
						fontSize: '1.3rem',
						color: isDarkMode ? '#d6d3d1' : '#000',
					}}
				>
					Filter Items:
				</Typography>
				<Stack
					direction={{ md: 'column', lg: 'row' }}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<DateMenu />
					{/* <FilterInputBox /> */}
				</Stack>
			</CardContent>
		</Card>
	);
};

export default FilterItems;
