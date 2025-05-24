import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import CategoryList from '../components/CategoryList';

const HomePage = () => {
  const books = useSelector(state => state.books);
  const popularBooks = books.slice(0, 3); // Display first 3 books as popular

  return (
    <div className="home-page">
      <h1>Welcome to Our Online Library</h1>
      <p>Discover your next favorite book!</p>
      
      <div className="content">
        <CategoryList />
        
        <div className="popular-books">
          <h2>Popular Books</h2>
          <div className="book-list">
            {popularBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;