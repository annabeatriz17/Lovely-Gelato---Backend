const express = require('express');
const FlavorController = require('../controllers/FlavorController');

const router = express.Router();

router.get('/flavors', FlavorController.getAll);
router.get('/flavors/:id', FlavorController.getById);
router.post('/flavors', FlavorController.create);
router.delete('/flavors/:id', FlavorController.delete);

module.exports = router;