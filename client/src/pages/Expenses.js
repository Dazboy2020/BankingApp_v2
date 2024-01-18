import TotalExpensesCard from '../components/summary-cards/TotalExpensesCard';
import ExpenseItems from '../components/transactionItems/ExpenseItems';

import TransactionLayout from './layout/TransactionLayout';

function Expenses({ children }) {
	return (
		<TransactionLayout
			TransactionTypeCard={<TotalExpensesCard />}
			TransactionItems={<ExpenseItems />}
		>
			{children}
		</TransactionLayout>
	);
}

export default Expenses;
