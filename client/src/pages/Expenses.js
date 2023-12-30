import ExpenseSummary from '../components/outline-Card/ExpenseSummary';
import ExpenseItems from '../components/transactionItems/ExpenseItems';

import TransactionLayout from './layout/TransactionLayout';

function Expenses({ children }) {
	return (
		<TransactionLayout
			TransactionType={<ExpenseSummary />}
			TransactionItems={<ExpenseItems />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Expenses;
