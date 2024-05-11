export function getErrorMessage(error) {
	if (error.response) {
		// Server error
		return error.response.data.error || 'An unknown error occurred.';
	} else if (error.request) {
		// Network error
		return 'An error occurred while connecting to the server.';
	} else {
		// Something else went wrong
		return 'An unknown error occurred.';
	}
}
