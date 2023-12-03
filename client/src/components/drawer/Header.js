import { Box, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDarkMode } from '../../hooks/useDarkMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppContext } from '../../context/context';

function Header() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const { state } = useAppContext();

	function handleClick() {
		toggleDarkMode((cur) => !cur);
	}

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			flexGrow="1"
			alignItems="center"
			sx={{
				ml: { sm: '1.5rem', xs: 0.5 },
				mr: { lg: 3, sm: 2, m: 1 },
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: '1.5rem', sm: '1.8rem', xl: '2rem' },
				}}
				noWrap
				component="section"
			>
				{`${state.username}`}
			</Typography>
			{isDarkMode ? (
				<LightModeIcon
					sx={{ fontSize: { xs: '2.2rem', sm: '3rem' } }}
					onClick={handleClick}
				/>
			) : (
				<DarkModeIcon
					sx={{ fontSize: { xs: '2.2rem', sm: '3rem' } }}
					onClick={handleClick}
				/>
			)}
		</Box>
	);
}

export default Header;
