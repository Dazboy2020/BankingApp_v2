import * as React from 'react';
import { useModalContext } from '../../context/modalContext';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/context';
import { useDarkMode } from '../../hooks/useDarkMode';
import { googleLogout } from '@react-oauth/google';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import useDeleteExpense from '../../hooks/useDeleteExpense';
import useDeleteDeposit from '../../hooks/useDeleteDeposit';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(type) {
	const { dispatch, id, state } = useAppContext();

	const { open, setOpen, modalTitle, modalMessage, modalAction } =
		useModalContext();

	const { isDarkMode } = useDarkMode();

	const { deleteExpense } = useDeleteExpense();
	const { deleteDeposit } = useDeleteDeposit();

	const navigate = useNavigate();

	function handleCancel() {
		setOpen(false);
	}

	function handleYes() {
		if (modalAction === 'logout') {
			setOpen(false);
			dispatch({ type: 'user/LoggedOut' });
			localStorage.removeItem('authToken');
			googleLogout();

			navigate('/');
		} else {
			const idToDelete = id;
			const expenseToDelete = state.expenses.find(
				(expense) => expense.id === idToDelete
			);

			const depositToDelete = state.deposits.find(
				(deposit) => deposit.id === idToDelete
			);

			if (expenseToDelete) {
				deleteExpense(idToDelete);
			} else if (depositToDelete) {
				deleteDeposit(idToDelete);
			}

			setOpen(false);
		}
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
					{modalTitle}
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						id="alert-dialog-slide-description"
						sx={{ color: isDarkMode ? '#fff' : '#000' }}
					>
						{modalMessage}
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
						onClick={handleYes}
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
