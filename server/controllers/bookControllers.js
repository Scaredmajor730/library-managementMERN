const Books = require("../models/book");

const mongoose = require("mongoose");

// get all books
const getBooks = async (req, res) => {
  const books = await Books.find({}).sort({ createdAt: -1 });

  res.status(200).json(books);
};

// get a single book

const getBook = async (req, res) => {
  const { id } = req.params;

  const book = await Books.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  if (!book) {
    return res.status(404).json({ error: "no such book" });
  }

  res.status(200).json(book);
};


// Create a new book entry
const createBook = async (req, res) => {
  const { name, author, description, isbn, cat } = req.body;
  try {
    const book = await Books.create({ name, author, description, isbn });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a book entry

const deleteBook = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'no such Book'})
    }

    const book = await Books.findOneAndDelete({_id: id})
    if(!book) {
        return res.status(400).json({error: 'No Such Book'})
    }

    res.status(200).json(book)
}

// Update a book entry

const updateBook = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'no such Book'})
    }

    const book = await Books.findOneAndUpdate({ _id: id}, { ...req.body })
    if(!book) {
        return res.status(400).json({error: 'no such Book'})
    }

    res.status(200).json(book)
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};
