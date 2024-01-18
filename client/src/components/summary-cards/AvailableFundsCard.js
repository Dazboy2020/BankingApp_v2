import * as React from 'react';

import { useAppContext } from '../../context/context';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CustomCard from './CustomCard';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function AvailbleFundsCard() {
	const { isDarkMode } = useDarkMode();
	const { totalExpenses, totalIncome } = useAppContext();

	return (
		<CustomCard
			transactionType="Available Funds"
			transactionTotal={`€${(totalIncome + totalExpenses).toFixed(2)}`}
			icon={
				<AccountBalanceIcon
					sx={{
						color: isDarkMode ? '#D1D5DB' : '#242a2e',
						fontSize: { xs: '40px', sm: '50px' },
					}}
				/>
			}
		/>
	);
}
