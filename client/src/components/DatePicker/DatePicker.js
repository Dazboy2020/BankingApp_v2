import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTransactionContext } from '../../context/transactionContext';
import { useDarkMode } from '../../Hooks/useDarkMode';

export default function DatePickerValue() {
	const { isDarkMode } = useDarkMode();

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

		width: '20ch',
		m: 1,
		color: isDarkMode ? '#d6d3d1' : '#000',
	};

	const { pickerDate, setPickerDate } = useTransactionContext();

	const datePickerSlotProps = {
		day: {
			sx: {
				'&.MuiPickersDay-root.Mui-selected': {
					backgroundColor: isDarkMode ? '#d6d3d1' : '#000',
					color: 'white',
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
		<DatePicker
			sx={pickerStyle}
			label="Select date"
			value={pickerDate}
			initialValue={null}
			onChange={(newValue) => setPickerDate(newValue)}
			slotProps={{
				...datePickerSlotProps,
			}}
		/>
	);
}
