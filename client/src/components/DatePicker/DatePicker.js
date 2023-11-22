import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue() {
	const [value, setValue] = React.useState(dayjs('date'));

	return (
		<DatePicker
			sx={{
				width: '20ch',
			}}
			label="Select date"
			value={value}
			onChange={(newValue) => setValue(newValue)}
		/>
	);
}
