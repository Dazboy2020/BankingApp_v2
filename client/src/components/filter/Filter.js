import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Stack } from '@mui/material';
// import FilterInputBox from './FilterInputBox';
import DateMenu from './DateMenu';

const FilterItems = () => {
	const { isDarkMode } = useDarkMode();

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				mb: 2,
				alignItems: 'flex-start',
				borderRadius: '10px',
			}}
		>
			<CardContent
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					alignItems: { xs: 'flex-start', sm: 'center' },
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						fontWeight: 500,
						width: '15rem',
						marginBottom: '0.1rem',
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
				</Box>
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
