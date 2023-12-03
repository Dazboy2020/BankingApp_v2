export function sortArrayByDate(arr) {
	arr.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB - dateA; // Ascending order, for descending: dateB - dateA
	});
}

export function groupArrayByDate(arr) {
	const groupedExpenses = {};

	arr.forEach((item) => {
		if (!groupedExpenses[item.date]) {
			groupedExpenses[item.date] = {
				date: item.date,
				totalAmount: 0,
				expenses: [],
			};
		}
		groupedExpenses[item.date].totalAmount += item.amount;
		groupedExpenses[item.date].expenses.push(item);
	});

	// Create a new array with aggregated expenses
	const aggregatedExpenses = Object.values(groupedExpenses);
	aggregatedExpenses.reverse();

	return aggregatedExpenses;
}
export function groupArrayByCategory(arr) {
	const groupedExpenses = {};

	arr.forEach((item) => {
		if (!groupedExpenses[item.category]) {
			groupedExpenses[item.category] = {
				category: item.category,
				totalAmount: 0,
				expenses: [],
			};
		}
		groupedExpenses[item.category].totalAmount += item.amount;
		groupedExpenses[item.category].expenses.push(item);
	});

	// Create a new array with aggregated expenses
	const aggregatedExpenses = Object.values(groupedExpenses);

	return aggregatedExpenses;
}
