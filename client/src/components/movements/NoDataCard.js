import { useDarkMode } from '../../hooks/useDarkMode';
import { useAppContext } from '../../context/context';
import { Paper, Stack, Box } from '@mui/material';
import classes from './Movements.module.css';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';

function NoDataCard({ type }) {
	const { isDarkMode } = useDarkMode();
	const { state } = useAppContext();

	const expenseEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<Paper
			className={classes.movements}
			sx={{
				border: state.isEditing ? '1px solid #f97316' : '',
				borderRadius: '10px',
			}}
		>
			<Stack component="section" className={expenseEditMode}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
					<span
						className={
							isDarkMode
								? classes.movements__type__dark
								: classes.movements__type
						}
					>
						{type}
					</span>
					<ErrorOutlineTwoToneIcon sx={{ fontSize: '40px', color: 'red' }} />
				</Box>
				<span
					className={
						isDarkMode ? classes.movements__date__dark : classes.movements__date
					}
				>
					{/* Awaiting Data */}
				</span>
				<span
					className={
						isDarkMode
							? classes.movements__category__dark
							: classes.movements__category
					}
				>
					{`Please add your first ${type} `}
				</span>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'flex-end',
							fontWeight: '500',
						}}
					>
						<span
							className={
								isDarkMode
									? classes.movements__value__dark
									: classes.movements__value
							}
						></span>
					</Box>
				</Box>
			</Stack>
		</Paper>
	);
}

export default NoDataCard;
