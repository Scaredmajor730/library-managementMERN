import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"; // Import Form and Button components from a UI library

const Bookform = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = {
      name,
      author,
      description,
      isbn,
    };

    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setAuthor("");
      setDescription("");
      setIsbn("");
      setError(null);
      console.log("New book added");
    }
  };

  return (
    <Form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Book</h3>
      <Form.Group>
        <Form.Label>Book Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Author:</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>ISBN:</Form.Label>
        <Form.Control
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Book
      </Button>

      {error && <div className="error">{error}</div>}
    </Form>
  );
};

export default Bookform;
