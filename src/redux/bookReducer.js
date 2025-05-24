import { ADD_BOOK } from './actions';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A story of wealth, love, and the American Dream in the 1920s.',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      description: 'A powerful story of racial injustice and moral growth in the American South.',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      category: 'Non-Fiction',
      description: 'A popular science book about cosmology.',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'A science fiction epic set in a distant future amidst a feudal interstellar society.',
      rating: 4.6,
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default bookReducer;