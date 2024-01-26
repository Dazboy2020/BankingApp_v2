import { useAppContext } from '../../../context/context';
import { Stack } from '@mui/material';
import CardWrapper from '../layout/CardWrapper';
import NoDataCardTitle from './NoDataCardTitle';
import NoDataCardCategory from './NoDataCardCategory';
import { keyframes } from '@emotion/react';

function NoDataCard({ type }) {
	const { state } = useAppContext();

	const slideUpKeyframes = keyframes({
		from: {
			opacity: 0,
			transform: 'translateY(100px)',
		},
		to: {
			transform: 'translateY(0px)',
			opacity: 1,
		},
	});

	const transactionCardStyling = {
		flexGrow: 1,
		flexDirection: 'column',
		display: 'flex',
		width: '100%',
		animation: state.isEditing
			? `${slideUpKeyframes} 0.25s 1 ease-in-out forwards`
			: '',
	};

	return (
		<CardWrapper>
			<Stack component="section" sx={transactionCardStyling}>
				<NoDataCardTitle type={type} />
				<NoDataCardCategory type={type} />
			</Stack>
		</CardWrapper>
	);
}

export default NoDataCard;
