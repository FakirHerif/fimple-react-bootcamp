import React, { useState } from 'react';
import axios from 'axios';
import BookModal from './BookModal';
import '../index.css';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks();
  };

  const showBookDetails = (book) => {
    setSelectedBook(book);
  };

  const showBookPreview = (book) => {
    window.open(book.volumeInfo.previewLink, '_blank');
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <header className="header">
        <h1>Book Search</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a book..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </header>
      <div className="book-container">
  {books.map((book) => (
    <div className="book-card" key={book.id}>
      <img
        className="book-cover"
        src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder.jpg'}
        alt={book.volumeInfo.title || 'No Title'}
      />
      <div className="book-details">
        <h3 className="book-title">{book.volumeInfo.title || 'No Title'}</h3>
        <p className="book-authors">{book.volumeInfo.authors || 'Unknown Author'}</p>
        <button className='details-button' onClick={() => showBookDetails(book)}>Details</button>
        <button className='details-button' onClick={() => showBookPreview(book)}>Preview</button>
      </div>
    </div>
  ))}
</div>
      {selectedBook && (
        <BookModal book={selectedBook} closeModal={closeModal} />
      )}
    </div>
  );
};

export default BookSearch;