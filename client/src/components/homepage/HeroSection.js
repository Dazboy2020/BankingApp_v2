import { Stack } from '@mui/material';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function HeroSection() {
	return (
		<Stack
			direction={{ xs: 'column', md: 'column', lg: 'row' }}
			spacing={2}
			sx={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'space-between',
				pt: { xs: 4, sm: 3.5, md: 4 },
			}}
		>
			<MainHeader />
			<SubHeader />
		</Stack>
	);
}

export default HeroSection;
