import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';

import TransactionLayout from './layout/TransactionLayout';
import ExpenseSummary from '../components/outline-Card/ExpenseSummary';
import CombinedItems from '../components/transactionItems/CombinedItems';

function Budget({ children }) {
	return (
		<>
			<AlertDialogSlide />
			<TransactionLayout
				TransactionType={<ExpenseSummary />}
				TransactionItems={<CombinedItems />}
			>
				{children}
			</TransactionLayout>
			);
		</>
	);
}

export default Budget;
