import { useFetchPrivateUserData } from '../../hooks/useFetchPrivateUserData';
import useAutoLogin from '../../hooks/useAutoLogin';
import styles from './Homepage.module.css';
import { BASE_URL } from '../../utils/BASE_URL';
import { useAppContext } from '../../context/context';

export default function Homepage() {
	const { state, user } = useAppContext();
	//? Checks to see if JWT token and if so, fetches data via middleware Protected Route
	useFetchPrivateUserData(`${BASE_URL}/userdata`);

	//? if user is in state then redirects to /overview
	useAutoLogin();

	if (!user && !state.isLoading) {
		return (
			<main className={styles.homepage}>
				<section>
					<h1>
						Stay in control of your finances.
						<br />
						Expense Tracker helps you monitor your spending.
					</h1>
					<h2>
						Welcome to Expense Tracker. An easy-to-use solution for managing
						your expenses.
					</h2>
				</section>
			</main>
		);
	}

	return null;
}
