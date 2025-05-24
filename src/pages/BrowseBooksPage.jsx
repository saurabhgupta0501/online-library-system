import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (category) {
      setFilteredBooks(books.filter(book => 
        book.category.toLowerCase() === category.toLowerCase()
      ));
    } else {
      setFilteredBooks(books);
    }
  }, [category, books]);

  const handleSearch = (query) => {
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) || 
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
    navigate('/browse');
  };

  return (
    <div className="browse-books">
      <h1>Browse Books</h1>
      <SearchBar onSearch={handleSearch} />
      
      {category && <h2>{category} Books</h2>}
      
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooksPage;