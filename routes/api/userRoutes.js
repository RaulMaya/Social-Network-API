const router = require("express").Router();
const {
  getUsers,
  getSpecificUser,
  createUser,
  updateUser,
  deleteUser
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSpecificUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
