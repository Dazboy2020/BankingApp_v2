import Income from '../components/outline-Card/Income';
import DepositItems from '../components/movements/DepositItems';
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
