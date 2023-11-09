const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "----Not available----",
    },
    isbn: {
      type: String,
      minlength: 10,
      maxlength: 13,
      required: true,
      unique: true,
    },

  },
  {
    timestamps: true,
  }
);
var Books = mongoose.model("Book", bookSchema);

module.exports = Books;
