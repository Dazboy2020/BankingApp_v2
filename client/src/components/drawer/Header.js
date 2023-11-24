import { Box, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDarkMode } from '../../hooks/useDarkMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	function handleClick() {
		toggleDarkMode((cur) => !cur);
	}

	return (
		<Box display="flex" justifyContent="space-between" flexGrow="1">
			<Typography
				sx={{
					fontSize: { xs: '1.5rem', sm: '2rem' },
				}}
				noWrap
				component="section"
			>
				Expense Tracker
			</Typography>
			{isDarkMode ? (
				<LightModeIcon sx={{ fontSize: '3rem' }} onClick={handleClick} />
			) : (
				<DarkModeIcon sx={{ fontSize: '3rem' }} onClick={handleClick} />
			)}
		</Box>
	);
}

export default Header;
