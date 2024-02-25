import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function LoginButton() {
	const theme = useTheme();
	const navigate = useNavigate();
	const [type, setType] = useState(null);

	useEffect(() => {
		const currentPath = window.location.pathname;
		let buttonText = 'Login'; // Default value

		if (
			currentPath.includes('/login') ||
			currentPath.includes('/signin') ||
			currentPath.includes('/signup')
		) {
			buttonText = 'Home';
		}

		setType(buttonText);
	}, []);

	function handleClick() {
		if (type === 'Home') navigate('/');
		if (type === 'Login') navigate('/login');
	}
	return (
		<Button
			sx={{
				[theme.breakpoints.up('md')]: {
					display: 'none',
				},
				fontSize: { xs: '.8rem', sm: '1.2rem' },
				'&:hover': {
					backgroundColor: '#680747',
					cursor: 'pointer',
				},
				bgcolor: '#f70776',
				color: 'white',
				paddingRight: '20px',
			}}
			size="medium"
			onClick={() => handleClick()}
			color="inherit"
			startIcon={<ExitToAppIcon size="large" color="white" sx={{ ml: 1 }} />}
		>
			{type}
		</Button>
	);
}

export default LoginButton;
