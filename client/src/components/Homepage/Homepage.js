import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';
import { useEffect } from 'react';

export default function Homepage() {
	const navigate = useNavigate();
	const storagetoken = localStorage.getItem('authToken');

	useEffect(
		function () {
			if (storagetoken) navigate('/overview');
		},
		[navigate, storagetoken]
	);

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
