import useAutoLogin from '../../Hooks/useAutoLogin';
import { useFetchPrivateUserData } from '../../Hooks/useFetchPrivateUserData';
import styles from './Homepage.module.css';

export default function Homepage() {
	const BASE_URL = 'http://localhost:5000';

	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData(`${BASE_URL}/userdata`);

	//? if user is in state then redirects to /overview
	useAutoLogin();

	return (
		<main className={styles.homepage}>
			<section>
				<h1>
					Stay in control of your finances.
					<br />
					Expense Tracker helps you monitor your spending.
				</h1>
				<h2>
					Welcome to Expense Tracker. An easy-to-use solution for managing your
					expenses.
				</h2>
			</section>
		</main>
	);
}
