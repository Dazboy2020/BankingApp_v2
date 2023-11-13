import * as React from 'react';

import { useAppContext } from '../../context/context';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CustomCard from './CustomCard';

export default function AvailbleFunds() {
	const { totalExpenses, totalIncome } = useAppContext();

	return (
		<CustomCard
			transactionType="Available Funds"
			transactionTotal={`€${(totalIncome + totalExpenses).toFixed(2)}`}
			icon={
				<AccountBalanceIcon
					sx={{ color: '#242a2e', fontSize: { xs: '50px', sm: '60px' } }}
				/>
			}
		/>
	);
}
