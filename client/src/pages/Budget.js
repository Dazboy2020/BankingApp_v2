import TransactionLayout from './layout/TransactionLayout';
import ExpenseSummary from '../components/summary-cards/ExpenseSummary';
import CombinedItems from '../components/transactionItems/CombinedItems';

function Budget({ children }) {
	return (
		<TransactionLayout
			TransactionType={<ExpenseSummary />}
			TransactionItems={<CombinedItems type="budget" />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Budget;
