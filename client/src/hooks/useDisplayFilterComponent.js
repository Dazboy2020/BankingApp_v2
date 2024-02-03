import { useAppContext } from '../context/context';
import FilterMenuBar from '../components/filter/FilterMenuBar';
import CategoryMenu from '../components/filter/CategoryMenu';

function useDisplayFilterComponent() {
	const { state } = useAppContext();

	function displayFilterComponent() {
		if (
			(state.isActive === 0 || state.isActive === 4) &&
			!state.isEditing &&
			state.combinedTransactions.length > 0
		) {
			return (
				<FilterMenuBar actionButton={<CategoryMenu />} text="Filter Items:" />
			);
		}

		if (state.isActive === 1 && !state.isEditing && state.expenses.length > 0) {
			return (
				<FilterMenuBar actionButton={<CategoryMenu />} text="Filter Items:" />
			);
		}

		if (state.isActive === 2 && !state.isEditing && state.deposits.length > 0) {
			return (
				<FilterMenuBar actionButton={<CategoryMenu />} text="Filter Items:" />
			);
		}
	}

	return { displayFilterComponent };
}

export default useDisplayFilterComponent;
