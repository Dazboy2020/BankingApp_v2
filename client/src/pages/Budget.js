import AlertDialogSlide from '../UI/AlertDialogue/AlertDialogue';
import BudgetInputCard from '../components/budget/BudgetInputCard';
import ResponsiveDrawer from '../components/drawer/Draw';
import PageLayout from './layout/PageLayout';

function Budget() {
	return (
		<>
			<ResponsiveDrawer />
			<AlertDialogSlide />

			<PageLayout>
				<BudgetInputCard />
			</PageLayout>
		</>
	);
}

export default Budget;
