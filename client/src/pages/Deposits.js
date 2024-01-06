import Income from '../components/summary-cards/Income';
import DepositItems from '../components/transactionItems/DepositItems';
import TransactionLayout from './layout/TransactionLayout';

function Deposits({ children }) {
	return (
		<TransactionLayout
			TransactionType={<Income />}
			TransactionItems={<DepositItems />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Deposits;
