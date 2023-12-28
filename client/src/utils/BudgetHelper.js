const dayjs = require('dayjs');

// Function to get the current month and year
export const getCurrentMonthYear = () => {
	const now = dayjs();
	return {
		month: now.month(), // returns 0-11
		year: now.year(),
	};
};

// Function to filter expenses for the current month and year
export const filterExpensesForCurrentMonth = (expenses) => {
	const { month, year } = getCurrentMonthYear();
	return expenses.filter((expense) => {
		const expenseDate = dayjs(expense.date);
		return expenseDate.month() === month && expenseDate.year() === year;
	});
};

// Function to sum total expenses
export const sumExpenses = (expenses) => {
	return expenses.reduce((total, expense) => total + expense.amount, 0);
};

// Function to calculate the percentage of budget spent
export const calculateBudgetSpent = (expenses, budget) => {
	const totalExpenses = sumExpenses(expenses);
	return (totalExpenses / budget) * 100;
};
