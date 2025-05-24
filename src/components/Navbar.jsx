import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;