import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTransactionContext } from '../../context/transactionContext';

export default function DatePickerValue() {
	const { pickerDate, setPickerDate } = useTransactionContext();
	console.log(pickerDate);

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
