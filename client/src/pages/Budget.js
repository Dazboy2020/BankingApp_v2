import TransactionLayout from './layout/TransactionLayout';
import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import CombinedItems from '../components/transactionItems/CombinedItems';

function Budget({ children }) {
	return (
		<TransactionLayout
			TransactionType={<TotalExpensesCard type="budget" />}
			TransactionItems={<CombinedItems type="budget" />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Budget;
