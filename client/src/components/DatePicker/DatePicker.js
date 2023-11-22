import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTransactionContext } from '../../context/transactionContext';

export default function DatePickerValue() {
	const { pickerDate, setPickerDate } = useTransactionContext();

	const formatDateToString = (date) => {
		return date ? dayjs(date).format('DD MMM YYYY') : ''; // Check if date is defined
	};

	// Get the formatted date string
	const formattedDate = formatDateToString(pickerDate);

	React.useEffect(
		function () {
			setPickerDate(formattedDate);
		},
		[formattedDate, setPickerDate]
	);

	return (
		<DatePicker
			sx={{
				width: '20ch',
			}}
			label="Select date"
			value={pickerDate}
			onChange={(newValue) => setPickerDate(newValue)}
		/>
	);
}
