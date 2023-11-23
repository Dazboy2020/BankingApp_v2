import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTransactionContext } from '../../context/transactionContext';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function DatePickerValue() {
	const { isDarkMode } = useDarkMode();

	// const defaultMaterialTheme = createTheme({
	// 	MuiTypography: {
	// 		styleOverrides: {
	// 			root: {
	// 				color: isDarkMode ? '#d6d3d1' : '#000',
	// 			},
	// 		},
	// 	},
	// });

	const pickerStyle = {
		'& .MuiInputBase-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			borderColor: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiPaper-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			borderColor: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiSvgIcon-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},

		'& .MuiDateCalendar-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiPickersCalendarHeader-root': {
			color: 'white',
		},

		width: '20ch',
		m: 1,
		color: isDarkMode ? '#d6d3d1' : '#000',
	};

	const { pickerDate, setPickerDate, expenseAmount, expenseCategory } =
		useTransactionContext();

	const formatDateToString = (date) => {
		return date ? dayjs(date).format('DD MMM YYYY') : ''; // Check if date is defined
	};

	// Get the formatted date string
	const formattedDate = formatDateToString(pickerDate);

	React.useEffect(
		function () {
			if (expenseAmount && expenseCategory) setPickerDate(formattedDate);
		},
		[formattedDate, setPickerDate, expenseAmount, expenseCategory]
	);

	const datePickerSlotProps = {
		day: {
			sx: {
				'& .MuiPickersCalendarHeader-root': {
					color: 'white',
				},
				'&.MuiPickersDay-root.Mui-selected': {
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
				},
				':not(.Mui-selected)': {
					backgroundColor: '#fff',
					borderColor: isDarkMode ? '#d6d3d1' : '#000',
				},
				'&:hover': {
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
					borderColor: isDarkMode ? '#d6d3d1' : '#000',
					color: 'white',
					transition: 'all 0.5s ease',
				},
				'&.Mui-selected': {
					color: '#fff',
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
					borderColor: isDarkMode ? '#d6d3d1' : '#000',
					'&:hover': {
						color: '#fff',
						backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
						borderColor: isDarkMode ? '#d6d3d1' : '#000',
						transition: 'all 0.5s ease',
					},
				},
			},
		},
		desktopPaper: {
			sx: {
				'.MuiPickersYear-yearButton.Mui-selected': {
					color: '#fff',
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
				},
				'.MuiPickersMonth-monthButton.Mui-selected': {
					color: '#fff',
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
				},
			},
		},
		mobilePaper: {
			sx: {
				'.MuiPickersYear-yearButton.Mui-selected': {
					color: '#fff',
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
				},
				'.MuiPickersMonth-monthButton.Mui-selected': {
					color: '#fff',
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
				},
			},
		},
	};

	return (
		// <ThemeProvider theme={defaultMaterialTheme}>
		<DatePicker
			sx={pickerStyle}
			label="Select date"
			value={pickerDate}
			onChange={(newValue) => setPickerDate(newValue)}
			slotProps={{
				...datePickerSlotProps,
			}}
		/>
		// </ThemeProvider>
	);
}
