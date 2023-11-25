export function sortArrayByDate(arr) {
	arr.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB - dateA; // Ascending order, for descending: dateB - dateA
	});
}
