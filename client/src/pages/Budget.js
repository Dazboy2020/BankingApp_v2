import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';

import TransactionLayout from './layout/TransactionLayout';
import ExpenseSummary from '../components/outline-Card/ExpenseSummary';
import CombinedItems from '../components/transactionItems/CombinedItems';
import { useAppContext } from '../context/context';

function Budget({ children }) {
	const { state } = useAppContext();

	const transactionType =
		state.budgetTransactions.length > 0 ? 'budget' : 'combined';
	return (
		<>
			<AlertDialogSlide />
			<TransactionLayout
				TransactionType={<ExpenseSummary />}
				TransactionItems={<CombinedItems type="budget" />}
			>
				{children}
			</TransactionLayout>
			);
		</>
	);
}

export default Budget;
