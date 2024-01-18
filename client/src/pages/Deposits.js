import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import DepositItems from '../components/transactionItems/DepositItems';
import TransactionLayout from './layout/TransactionLayout';

function Deposits({ children }) {
	return (
		<TransactionLayout
			TransactionType={<TotalDepositsCard />}
			TransactionItems={<DepositItems />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Deposits;
