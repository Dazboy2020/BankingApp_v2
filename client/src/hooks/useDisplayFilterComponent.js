import FilterItems from '../components/filter/Filter';
import { useAppContext } from '../context/context';

function useDisplayFilterComponent() {
	const { state } = useAppContext();

	function displayFilterComponent() {
		if (state.isActive === 1 && !state.isEditing && state.expenses.length > 0) {
			return <FilterItems />;
		}

		if (state.isActive === 2 && !state.isEditing && state.deposits.length > 0) {
			return <FilterItems />;
		}
	}

	return { displayFilterComponent };
}

export default useDisplayFilterComponent;
