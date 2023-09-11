import { Stack } from '@mui/material';
import classes from './Movements.module.css';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context/context';

const MovementsExpenses = () => {
	const { state } = useAppContext();

	const movementsToDisplay = state.expenses;

	const moves = state.sort
		? movementsToDisplay.slice().sort((a, b) => b[0] - a[0])
		: movementsToDisplay;

	const animate =
		state.addTransactionAnimate === true
			? classes.movements__row__animate
			: classes.movements__row;

	function handleEditClick() {}

	return (
		<ul className={animate}>
			{moves.map((item) => (
				<div
					key={Math.floor(Math.random() * 10000) + 1}
					className={classes.movements}
				>
					<Stack className={classes.movements__row}>
						<span className={classes.movements__type__expense}>Expense</span>
						<span className={classes.movements__date}>{item.date}</span>
						<span className={classes.movements__category}>{item.category}</span>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'space-between',
								alignContent: 'center',
								justifyContent: 'center',
							}}
						>
							<Box sx={{ mt: '2rem' }}>
								<Button
									variant="contained"
									sx={{
										'&:hover': {
											backgroundColor: '#680747',
											cursor: 'default',
										},
										bgcolor: '#f70776',
										color: 'white',
										fontSize: '1rem',
										paddingRight: '.8rem',
										mr: '10px',
										fontWeight: '500',
										mt: '.3rem',
									}}
									onClick={handleEditClick}
									startIcon={
										<CreateIcon
											sx={{
												color: 'white',
												mr: '2px',
											}}
										/>
									}
								>
									Edit
								</Button>
								<Button
									variant="contained"
									sx={{
										'&:hover': {
											backgroundColor: '#680747',
											cursor: 'default',
										},
										bgcolor: '#f70776',
										color: 'white',
										fontSize: '1rem',
										paddingRight: '.8rem',
										fontWeight: '500',
										mt: '.3rem',
									}}
									onClick={handleEditClick}
									startIcon={
										<DeleteIcon
											sx={{
												color: 'white',
												mr: '2px',
											}}
										/>
									}
								>
									Delete
								</Button>
							</Box>
							<span className={classes.movements__value}>€{item.amount}</span>
						</Box>
					</Stack>
				</div>
			))}
		</ul>
	);
};

export default MovementsExpenses;
