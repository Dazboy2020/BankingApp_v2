import ExpenseSummary from '../components/outline-Card/ExpenseSummary';
import ExpenseItems from '../components/movements/ExpenseItems';

import TransactionLayout from './layout/TransactionLayout';
// import { useAppContext } from '../context/context';

function Expenses({ children }) {
	// const { state } = useAppContext();
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
