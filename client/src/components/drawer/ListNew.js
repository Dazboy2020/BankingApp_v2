import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import { useModalContext } from '../../context/modalContext';
import { useTransactionContext } from '../../context/transactionContext';
import { Button, List, ListItem, ListItemText } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EuroIcon from '@mui/icons-material/Euro';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import HouseIcon from '@mui/icons-material/House';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SavingsIcon from '@mui/icons-material/Savings';
import ListItemIcon from '@mui/material/ListItemIcon';

const ListNew = (props) => {
	const { state, dispatch } = useAppContext();

	const {
		setOpen,
		modalTitle,
		setModalTitle,
		modalMessage,
		setModalMessage,
		modalAction,
		setModalAction,
	} = useModalContext();

	const { setPickerDate } = useTransactionContext();

	const navigate = useNavigate();

	function handleClick() {
		setModalMessage('Are you sure you want to exit Expensify?');
		setModalTitle('You are about to disconnect from all services.');
		setModalAction('logout');
		setOpen(true, modalMessage, modalTitle, modalAction);
	}

	function handleLink(text, index) {
		if (text === 'Logout') return handleClick();

		if (state.isEditing) dispatch({ type: 'edit/cancel' });

		setPickerDate(null);
		dispatch({ type: 'addActiveClass', payload: index });

		navigate('/' + text);
	}

	const sideBarItems = [
		{
			text: 'Overview',
			icon: <HouseIcon />,
		},
		{
			text: 'Expenses',
			icon: <ShoppingCartIcon />,
		},
		{
			text: 'Deposits',
			icon: <EuroIcon />,
		},
		{
			text: 'Charts',
			icon: <PsychologyAltIcon />,
		},
		{
			text: 'Budget',
			icon: <SavingsIcon />,
		},
		{
			text: 'Account',
			icon: <AccountCircleIcon />,
		},
		{
			text: 'Logout',
			icon: <ExitToAppIcon />,
			onClick: handleClick,
		},
	];

	//* styles for live version
	// const styles = {
	// 	'.css-19tv5ub': {
	// 		letterSpacing: '.1rem',
	// 		fontSize: '1.4rem',
	// 		fontWeight: 'bold',
	// 	},
	// };

	const styles = {
		'& .MuiTypography-root': {
			letterSpacing: '.1rem',
			fontSize: '1.4rem',
			fontWeight: 'bold',
			ml: '1rem',
		},
	};

	return (
		<List>
			{sideBarItems.map((item, index) => {
				const { text, icon, onClick } = item;
				const buttonStyles = {
					'&:hover': {
						backgroundColor: state.isActive === index ? '#f97316' : '#343a40',
						cursor: 'pointer',
					},
					width: '100%',
					textAlign: 'left',
					backgroundColor: state.isActive === index ? '#f97316' : '#242a2e',
					color: state.isActive === index ? '#f5f5f5' : '#d6d3d1',
				};

				return (
					<ListItem sx={{ width: '100%' }} key={item.text} onClick={onClick}>
						<Button sx={buttonStyles} onClick={() => handleLink(text, index)}>
							{icon && <ListItemIcon>{icon}</ListItemIcon>}
							<ListItemText primary={text} sx={styles} />
						</Button>
					</ListItem>
				);
			})}
		</List>
	);
};

export default ListNew;
