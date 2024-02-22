import { Box } from '@mui/material';

function UnprotectedPageLayout({
	children,
	appBar = null,
	backgroundImage,
	props,
}) {
	return (
		<>
			{appBar}

			<Box
				component="main"
				sx={{
					minHeight: '100dvh',
					minWidth: '100%',
					backgroundImage: backgroundImage,
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
