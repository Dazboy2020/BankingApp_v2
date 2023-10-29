import { useEffect } from 'react';
import { useAppContext } from '../context/context';

export default function useClearAnimation() {
	const { dispatch } = useAppContext();
	useEffect(() => {
		const intervalDuration = 2000;

		const intervalId = setInterval(() => {
			dispatch({ type: 'addTransactionAnimate', payload: false });
		}, intervalDuration);

		return () => {
			clearInterval(intervalId);
		};
	}, [dispatch]);
}
