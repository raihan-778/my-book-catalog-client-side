import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';

import BookDetails from '../pages/BookDetails';
import EditBook from '../pages/EditBook';
import PrivateRoute from './PrivateRoute';

import NotFound from '../pages/NotFound';

import AddBook from '../pages/AddBook';
import AllBooks from '../pages/AllBooks';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/book-review',
        element: (
          <PrivateRoute>
            <EditBook />,
          </PrivateRoute>
        ),
      },
      {
        path: '/add-book',
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/singleBook/:id',
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
