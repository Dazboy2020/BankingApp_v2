import * as React from 'react';
import { useAppContext } from '../../context/context';

import PaidIcon from '@mui/icons-material/Paid';
import CustomCard from './CustomCard';

export default function TotalDepositsCard() {
	const { totalIncome } = useAppContext();

	return (
		<CustomCard
			TransactionTypeCard="Total Deposits"
			transactionTotal={`€${totalIncome.toFixed(2)}`}
			icon={
				<PaidIcon
					sx={{ color: 'green', fontSize: { xs: '40px', sm: '50px' } }}
				/>
			}
		/>
	);
}
