import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Box } from '@mui/material';

const FilterMenuBar = ({ actionButton, text, actionButton2 }) => {
	const { isDarkMode } = useDarkMode();

	const { ...otherProps } = actionButton2 ? actionButton2.props : {};

	return (
		<Card
			component="article"
			sx={{
				mb: 2,
				borderRadius: '10px',
				p: 0,
			}}
		>
			<CardContent
				sx={{
					width: '100%',
					display: 'flex',
					flexGrow: 1,
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'poppins',
						fontSize: '1.3rem',
						color: isDarkMode ? '#d6d3d1' : '#000',
					}}
				>
					{text}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						width: '100%',
						flexGrow: 1,
						justifyContent:
							otherProps.type === 'card'
								? { xs: 'space-between', md: 'flex-end' }
								: 'flex-end',
					}}
				>
					<span>{actionButton2}</span>
					<span>{actionButton}</span>
				</Box>
			</CardContent>
		</Card>
	);
};

export default FilterMenuBar;
