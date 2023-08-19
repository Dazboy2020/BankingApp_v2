import styles from './Homepage.module.css';

export default function Homepage() {
	return (
		<main className={styles.homepage}>
			<section>
				<h1>
					Stay in control of your finances.
					<br />
					Expense Tracker helps you monitor your spending.
				</h1>
				<h2>
					Welcome to expense tracker. An easy-to-use solution for managing your
					expenses.
				</h2>
			</section>
		</main>
	);
}
