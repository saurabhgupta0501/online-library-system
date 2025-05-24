import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = useSelector(state => 
    state.books.find(book => book.id === parseInt(id))
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}/5</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link to="/browse" className="back-link">Back to Browse</Link>
    </div>
  );
};

export default BookDetailsPage;