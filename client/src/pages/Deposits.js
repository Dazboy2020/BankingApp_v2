import TotalDepositsCard from '../components/summary-cards/TotalDepositsCard';
import DepositItems from '../components/transactionItems/deposit-card/DepositItems';
import TransactionLayout from './layout/TransactionLayout';

function Deposits({ children }) {
	return (
		<TransactionLayout
			TransactionTypeCard={<TotalDepositsCard />}
			TransactionItems={<DepositItems />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Deposits;
