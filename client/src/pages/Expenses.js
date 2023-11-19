import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';
import ExpenseItems from '../components/Movements/ExpenseItems';

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
