const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { protect } = require('../middleware/auth');

const {
	addDeposit,
	deleteDeposit,
	editDeposit,
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

//! Routes
router
	.use(protect)
	.post('/add-deposit', addDeposit)
	.delete('/deletedeposit/:userId/:depositId', deleteDeposit)
	.put(editDeposit)
	.put('/editdeposit/:userId/:depositId', editDeposit);

module.exports = router;
