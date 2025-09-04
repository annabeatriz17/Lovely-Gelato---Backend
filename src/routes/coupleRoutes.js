const express = require('express');
const CoupleController = require('../controllers/CoupleController');

const router = express.Router();

router.get('/couples', CoupleController.getAll);
router.get('/couples/:id', CoupleController.getById);
router.post('/couples', CoupleController.create);
router.delete('/couples/:id', CoupleController.delete);

module.exports = router;