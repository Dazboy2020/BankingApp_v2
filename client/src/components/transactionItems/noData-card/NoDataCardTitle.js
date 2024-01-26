import { useAppContext } from '../../../context/context';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Box, Typography } from '@mui/material';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';

function NoDataCardTitle({ type }) {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();

	const styling = {
		display: 'flex',
		justifyContent: 'space-between',
		mb: 3,
		flexGrow: 1,
	};

	const titleStyling = {
		backgroundColor: isDarkMode ? '#212529' : '#495057',
		fontSize: '1.2rem',
		textTransform: 'uppercase',
		letterSpacing: '0.1rem',
		color: ' #fff',
		padding: '0.5rem',
		width: '15rem',
		mb: '0.1rem',
		borderRadius: '8px',
		fontWeight: 600,
		pl: 1,
	};

	return (
		<Box sx={styling}>
			<span>
				<Typography sx={titleStyling}>
					{state.isActive === 4 ? 'Awaiting Data' : type}
				</Typography>
			</span>
			<ErrorOutlineTwoToneIcon sx={{ fontSize: '40px', color: 'red' }} />
		</Box>
	);
}

export default NoDataCardTitle;
