import ExpenseSummary from '../components/Outline-Card/ExpenseSummary';
import ExpenseItems from '../components/Movements/ExpenseItems';

import TransactionLayout from './TransactionLayout';

function Expenses() {
	return (
		<TransactionLayout
			TransactionType={<ExpenseSummary />}
			TransactionItems={<ExpenseItems />}
		/>
	);
}

export default Expenses;
