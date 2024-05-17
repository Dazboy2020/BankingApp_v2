const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { protect } = require('../middleware/auth');

const {
	addDeposit,
	deleteDeposit,
	editDeposit,
} = require('../controllers/routeControllers');

const app = express();

const router = express.Router();

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

//* Define routes
router.post('/add-deposit', addDeposit);
router.delete('/deletedeposit/:userId/:depositId', deleteDeposit);
router.put('/editdeposit/:userId/:depositId', editDeposit);

module.exports = router;
