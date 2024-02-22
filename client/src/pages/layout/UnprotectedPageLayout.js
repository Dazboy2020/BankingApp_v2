import { Box } from '@mui/material';

function UnprotectedPageLayout({ children, appBar = null, props }) {
	return (
		<>
			{appBar}

			<Box
				component="main"
				sx={{
					minHeight: '100dvh',
					minWidth: '100%',

					backgroundImage:
						'repeating-radial-gradient(circle at center center, transparent 0px, transparent 11px,rgba(255,255,255,0.04) 11px, rgba(255,255,255,0.04) 19px,transparent 19px, transparent 29px,rgba(255,255,255,0.04) 29px, rgba(255,255,255,0.04) 33px),repeating-radial-gradient(circle at center center, rgb(0,0,0) 0px, rgb(0,0,0) 5px,rgb(0,0,0) 5px, rgb(0,0,0) 17px,rgb(0,0,0) 17px, rgb(0,0,0) 30px,rgb(0,0,0) 30px, rgb(0,0,0) 43px,rgb(0,0,0) 43px, rgb(0,0,0) 45px,rgb(0,0,0) 45px, rgb(0,0,0) 47px); background-size: 53px 53px',
				}}
			>
				<Box
					component="section"
					sx={{
						...props,
						ml: { xs: 5, s: 12, md: 12, lg: 16, xl: 30 },
						mr: { xs: 5, s: 12, md: 12, lg: 16, xl: 30 },
					}}
				>
					{children}
				</Box>
			</Box>
		</>
	);
}

export default UnprotectedPageLayout;
