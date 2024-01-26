import { useAppContext } from '../../../context/context';
import { Paper, Stack } from '@mui/material';

function CardWrapper({ children }) {
	const { state } = useAppContext();
	return (
		<Paper
			sx={{
				display: 'flex',
				overflowY: 'auto',
				fontFamily: 'system-ui',
				mt: '0.5rem',
				padding: '0.5rem',
				//
				border: state.isEditing ? '1px solid #f97316' : '',
				borderRadius: '10px',
				mb: { xs: 2, sm: 3, md: 4 },
			}}
		>
			<Stack
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					flexGrow: 1,
					flexDirection: 'column',
				}}
			>
				{children}
			</Stack>
		</Paper>
	);
}

export default CardWrapper;
