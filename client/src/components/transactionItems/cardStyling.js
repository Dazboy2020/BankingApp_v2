export const amountStyling = (isDarkMode) => ({
	fontSize: '1.2rem',
	ml: 'auto',
	fontWeight: 'bold',
	color: isDarkMode ? '#d6d3d1' : '#000',
	pl: 0.5,
});

export const categoryStyling = (isDarkMode) => ({
	fontFamily: 'system-ui',
	fontSize: '1rem',
	fontWeight: 500,
	color: isDarkMode ? '#d6d3d1' : '#000',
	pl: 0.5,
});

export const dateStyling = (isDarkMode) => ({
	fontFamily: 'system-ui',
	fontSize: '1rem',
	textTransform: 'uppercase',
	// fontWeight: 500,
	mt: '5px',
	color: isDarkMode ? '#d6d3d1' : '#000',
	pl: 0.5,
});

export const titleStyling = (isDarkMode) => ({
	backgroundColor: isDarkMode ? '#212529' : '#495057',
	fontSize: '1rem',
	textTransform: 'uppercase',
	letterSpacing: '0.1rem',
	color: ' #fff',
	padding: '0.5rem',
	width: '15rem',
	mb: '0.1rem',
	borderRadius: '8px',
	fontWeight: 600,
	pl: 1,
});
