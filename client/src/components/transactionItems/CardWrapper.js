import { useAppContext } from '../../context/context';
import { Paper } from '@mui/material';
import classes from './Movements.module.css';

function CardWrapper({ children }) {
	const { state } = useAppContext();
	return (
		<Paper
			className={classes.movements}
			sx={{
				border: state.isEditing ? '1px solid #f97316' : '',
				borderRadius: '10px',
			}}
		>
			{children}
		</Paper>
	);
}

export default CardWrapper;
