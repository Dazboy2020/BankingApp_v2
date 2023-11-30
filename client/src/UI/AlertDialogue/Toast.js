import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import { useAppContext } from '../../context/context';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast() {
	const { openToast, setOpenToast, message } = useAppContext();
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenToast(false);
	};

	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="medium"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={openToast}
				autoHideDuration={3000}
				onClose={handleClose}
				// message="Transaction Completed!"
				message={message} // Use the dynamic message prop here
				action={action}
			>
				<Alert
					onClose={handleClose}
					severity="info"
					sx={{ width: '100%', fontSize: '1.5rem' }}
				>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
}
