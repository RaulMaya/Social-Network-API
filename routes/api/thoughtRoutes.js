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

// /api/ThoughtsgetThoughts/:videoId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/ThoughtsgetThoughts/:videoId/responses
router.route("/:thoughtId/responses").post(addReaction);

// /api/ThoughtsgetThoughts/:videoId/responses/:responseId
router.route("/:thoughtId/responses/:reactionId").delete(removeReaction);

module.exports = router;
