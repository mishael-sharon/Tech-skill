// src/Home.js
import React, { useEffect, useState } from 'react';
import { getBooks, getAuthors } from './api';
import './Home.css'
const Home = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const booksData = await getBooks();
        const authorsData = await getAuthors();

        setBooks(booksData);
        setAuthors(authorsData);
      } catch (error) {
       
      }
    };

    fetchData();
  }, []);

  return (
    
    <div>
      <h1>Books Collection</h1>
      <div>
        <h2>Books:</h2>
        <ul>
          {books.map(book => (
            <li key={book.id}>{`${book.title} by ${book.author}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Authors:</h2>
        <ul>
          {authors.map(author => (
            <li key={author}>{author}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
