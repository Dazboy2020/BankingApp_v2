import ExpenseSummary from '../components/outline-Card/ExpenseSummary';
import ExpenseItems from '../components/movements/ExpenseItems';

import TransactionLayout from './TransactionLayout';

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
