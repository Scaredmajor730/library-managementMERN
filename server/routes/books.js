const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookControllers");

const router = express.Router();

// Get all Books
router.get("/", getBooks);

// GET a single book
router.get("/:id", getBook);

// POST a new Book
router.post("/", createBook);

// DELETE a book
router.delete("/:id", deleteBook);

router.patch("/:id", updateBook);

module.exports = router;
