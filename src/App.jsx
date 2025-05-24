 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {


  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowseBooksPage />} />
              <Route path="/browse/:category" element={<BrowseBooksPage />} />
              <Route path="/book/:id" element={<BookDetailsPage />} />
              <Route path="/add-book" element={<AddBookPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </Provider>

    </>
  )
}

export default App
