const router = require('express').Router();
const {
  getUsers,
  getSpecificUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSpecificUser);

module.exports = router;
