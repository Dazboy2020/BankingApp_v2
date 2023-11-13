import * as React from 'react';
import { useAppContext } from '../../context/context';

import PaidIcon from '@mui/icons-material/Paid';
import CustomCard from './CustomCard';

export default function Income() {
	const { totalIncome } = useAppContext();

	return (
		<CustomCard
			transactionType="Total Income"
			transactionTotal={`€${totalIncome.toFixed(2)}`}
			icon={
				<PaidIcon
					sx={{ color: 'green', fontSize: { xs: '50px', sm: '60px' } }}
				/>
			}
		/>
	);
}
