import { useDarkMode } from '../../hooks/useDarkMode';
import { Box, Card, CardContent, Typography } from '@mui/material';
import BudgetInputBox from '../budget/BudgetInputBox';

import SavingsIcon from '@mui/icons-material/Savings';
function BudgetCard() {
	const { isDarkMode } = useDarkMode();

	return (
		<Card
			component="article"
			sx={{
				display: 'flex',
				flexGrow: 1,
				mb: 2,
				alignItems: 'flex-start',
				borderRadius: '10px',
			}}
		>
			<CardContent
				sx={{
					width: '100%',
					p: 1,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 'bold',
							color: isDarkMode ? '#d6d3d1' : '#000',
						}}
					>
						Set your monthly budget
					</Typography>
					<SavingsIcon
						sx={{ color: 'green', fontSize: { xs: '40px', sm: '50px' } }}
					/>
				</Box>
				<BudgetInputBox />
			</CardContent>
		</Card>
	);
}

export default BudgetCard;
