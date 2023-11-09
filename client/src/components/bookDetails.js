import { React } from "react";

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <h4>{book.name}</h4>
      <p>
        <strong>Author:</strong>
        {book.author}
      </p>
      <p>
        <strong>Description:</strong>
        {book.description}
      </p>
      <p>
        <strong>ISBN:</strong>
        {book.isbn}
      </p>
      <p>{book.createdAt}</p>
    </div>
  );
};
export default BookDetails;
