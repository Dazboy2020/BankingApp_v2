import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/context';
import { useDarkMode } from '../../Hooks/useDarkMode';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
	const { open, setOpen, dispatch } = useAppContext();
	const { isDarkMode } = useDarkMode();

	const navigate = useNavigate();

	function handleCancel() {
		setOpen(false);
	}

	function handleYesLogout() {
		setOpen(false);
		dispatch({ type: 'user/LoggedOut' });
		localStorage.removeItem('authToken');

		navigate('/');
	}

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCancel}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle sx={{ color: isDarkMode ? '#fff' : '#000' }}>
					{'You are about to disconnect from all services.'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						id="alert-dialog-slide-description"
						sx={{ color: isDarkMode ? '#fff' : '#000' }}
					>
						Are you sure you want to exit Expensify?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						sx={{
							'&:hover': {
								backgroundColor: '#680747',
								cursor: 'default',
							},
						}}
						color="secondary"
						onClick={handleYesLogout}
					>
						Yes
					</Button>
					<Button
						sx={{
							'&:hover': {
								backgroundColor: '#680747',
								cursor: 'default',
							},
						}}
						color="secondary"
						onClick={handleCancel}
					>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
