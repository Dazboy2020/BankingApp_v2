import { Grid } from '@mui/material';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function HeroSection() {
	return (
		<Grid
			container
			spacing={2}
			rowSpacing={{ xs: 2, s: 2, sm: 2, md: 10, lg: 10 }}
			columnSpacing={3}
			sx={{
				minHeight: { xs: '100vh', md: 'calc(100vh + 6rem)' },
				alignContent: 'center',
			}}
		>
			<Grid item xs={12} md={12} lg={7}>
				<MainHeader />
			</Grid>

			<Grid item xs={12} md={12} lg={5}>
				<SubHeader />
			</Grid>
		</Grid>
	);
}

export default HeroSection;
