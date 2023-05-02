const mongoose = require("mongoose");
const userSchema = require("./User");
const reactionSchema = require("./Reaction");

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      // format the timestamp using a custom function
      return new Date(timestamp).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      });
    },
  },
  username: {
    userSchema,
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
