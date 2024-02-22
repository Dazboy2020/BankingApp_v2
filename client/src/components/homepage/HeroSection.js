import { Grid } from '@mui/material';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function HeroSection() {
	return (
		<Grid
			container
			spacing={2}
			rowSpacing={10}
			columnSpacing={3}
			sx={{
				pt: { xs: 10, sm: 10, md: 20, lg: 30 },
				minHeight: { lg: '40rem' },
			}}
		>
			<Grid
				item
				xs={12}
				md={12}
				lg={7}
				sx={{ mt: { xs: 2, sm: 3, md: 5, lg: 8 } }}
			>
				<MainHeader />
			</Grid>

			<Grid item xs={12} md={12} lg={5} sx={{ p: 0 }}>
				<SubHeader />
			</Grid>
		</Grid>
	);
}

export default HeroSection;
