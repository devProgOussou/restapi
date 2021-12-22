const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/user/', userController.getAllUsers);
router.post('/user/', userController.addNewUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router