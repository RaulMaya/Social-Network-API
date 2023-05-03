const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thoughts");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, // ensure uniqueness
      required: true, // ensure a value is present
      trim: true, // trim whitespace from both ends
    },
    email: {
      type: String,
      unique: true, // ensure uniqueness
      required: true, // ensure a value is present
      trim: true, // trim whitespace from both ends
      validate: {
        validator: function (v) {
          return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); // validate as email
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "friends",
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
