import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ openToast, setOpenToast }) {
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
				open={openToast}
				autoHideDuration={3000}
				onClose={handleClose}
				message="Transaction Completed!"
				action={action}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					sx={{ width: '100%', fontSize: '1.5rem' }}
				>
					Transaction Completed!
				</Alert>
			</Snackbar>
		</div>
	);
}
