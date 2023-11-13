// import { useNavigate } from 'react-router-dom';
import useAutoLogin from '../../Hooks/useAutoLogin';
import { useFetchPrivateUserData } from '../../Hooks/useFetchPrivateUserData';
import styles from './Homepage.module.css';
// import { useEffect } from 'react';

export default function Homepage() {
	const BASE_URL = 'http://localhost:5000';

	useFetchPrivateUserData(`${BASE_URL}/userdata`);
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
