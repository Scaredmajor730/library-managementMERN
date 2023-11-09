import React, { useEffect, useState } from "react";

//components
import BookDetails from "../components/bookDetails";
import Bookform from "../components/bookForm";

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="home">
      <div className="books">
        {books &&
          books.map((book) => <BookDetails key={book._id} book={book} />)}
      </div>
      <Bookform/>
    </div>
  );
};

export default Home;
