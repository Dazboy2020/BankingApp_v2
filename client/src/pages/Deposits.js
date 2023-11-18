import Income from '../components/Outline-Card/Income';
import DepositItems from '../components/Movements/DepositItems';
import TransactionLayout from './TransactionLayout';

function Deposits() {
	return (
		<TransactionLayout
			TransactionType={<Income />}
			TransactionItems={<DepositItems />}
		/>
	);
}

export default Deposits;
