// import React from 'react';
// import classes from './Login.module.css';

// const Login = ({ pin, user, onLogin, setPin, setUser }) => {
// 	return (
// 		<div className={classes.container}>
// 			<form className={classes.form__input__main} id="login" onSubmit={onLogin}>
// 				<h1 className={classes.welcome}>Welcome back</h1>

// 				<div>
// 					<div className={classes.inputs}>
// 						<input
// 							type="text"
// 							className={classes.username__input}
// 							autoFocus
// 							placeholder="Username"
// 							value={user}
// 							onChange={(e) => setUser(e.target.value)}
// 						/>

// 						<input
// 							type="password"
// 							className={classes.password__input}
// 							placeholder="Pin"
// 							value={pin}
// 							onChange={(e) => setPin(e.target.value)}
// 						/>
// 					</div>

// 					<button className={classes.submit__btn} type="submit">
// 						LOG IN
// 					</button>

// 					{/* <button className={classes.create__btn} type="submit">
// 						CREATE ACCOUNT
// 					</button> */}
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// export default Login;
