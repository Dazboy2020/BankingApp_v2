import Income from '../components/Outline-Card/Income';
import DepositItems from '../components/Movements/DepositItems';
import TransactionLayout from './TransactionLayout';

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
