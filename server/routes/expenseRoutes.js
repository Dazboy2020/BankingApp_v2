const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const { protect } = require('../middleware/auth');

const {
	addExpense,
	deleteExpense,
	editExpense,
	editBudget,
} = require('../controllers/routeControllers');

const app = express();

router.use(bodyParser.json());

//! middleware
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	})
);

//* Apply protect middleware to all routes
router.use(protect);

router.post('/addexpense', addExpense);
router.delete('/deleteexpense/:userId/:expenseId', deleteExpense);
router.put('/editexpense/:userId/:expenseId', editExpense);
router.put('/edit-budget/:userId/', editBudget);

module.exports = router;
