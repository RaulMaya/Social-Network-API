const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought, 
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/ThoughtsgetThoughts
router.route("/").get(getThoughts).post(createThought);

// /api/ThoughtsgetThoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/ThoughtsgetThoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/ThoughtsgetThoughts/:thoughtId/reactions/:responseId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
