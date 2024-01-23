import { useAppContext } from '../../../context/context';
import { Stack } from '@mui/material';
import classes from '../Movements.module.css';
import CardWrapper from '../CardWrapper';
import NoDataCardTitle from './NoDataCardTitle';
import NoDataCardCategory from './NoDataCardCategory';

function NoDataCard({ type }) {
	const { state } = useAppContext();

	const expenseEditMode = state.isEditing
		? classes.movements__row__edit
		: classes.movements__row;

	return (
		<CardWrapper>
			<Stack component="section" className={expenseEditMode}>
				<NoDataCardTitle type={type} />
				<NoDataCardCategory type={type} />
			</Stack>
		</CardWrapper>
	);
}

export default NoDataCard;
