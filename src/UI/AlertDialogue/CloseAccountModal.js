import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function CloseAccountModal({
	openModal,
	setOpenModal,
	LogUserOut,
}) {
	function handleYes() {
		setOpenModal(false);
		LogUserOut();
	}

	function handleCancel() {
		setOpenModal(false);
	}

	return (
		<div>
			<Dialog
				open={openModal}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCancel}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>
					{
						'Warning! You are about to terminate your account and all data will be deleted'
					}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Do you want to close your account?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={handleYes}>
						Yes
					</Button>
					<Button color="secondary" onClick={handleCancel}>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
