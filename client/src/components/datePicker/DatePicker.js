import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTransactionContext } from '../../context/transactionContext';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function DatePickerValue({ labelName }) {
	const { isDarkMode } = useDarkMode();
	const { pickerDate, setPickerDate } = useTransactionContext();

	const pickerStyle = {
		'& .MuiInputBase-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			borderColor: isDarkMode ? '#d6d3d1' : '#000',
			height: '45px',
		},
		'& .MuiFormLabel-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			borderColor: isDarkMode ? '#d6d3d1' : '#000',
			fontSize: '10px',
		},
		'& .MuiOutlinedInput-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			borderColor: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiPaper-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			borderColor: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiSvgIcon-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
			fontSize: '1.75rem',
		},

		'& .MuiDateCalendar-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiTextField-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiPickersFadeTransitionGroup-root ': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},
		'& .MuiInputBase-formControl': {
			color: 'secondary',
		},
		'&.MuiTypography-root': {
			color: isDarkMode ? '#d6d3d1' : '#000',
		},

		width: '20ch',
		m: 1,
		color: isDarkMode ? '#d6d3d1' : '#000',
	};

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
			label={labelName}
			value={pickerDate}
			initialValue={null}
			onChange={(newValue) => setPickerDate(newValue)}
			slotProps={{
				...datePickerSlotProps,
			}}
		/>
	);
}
