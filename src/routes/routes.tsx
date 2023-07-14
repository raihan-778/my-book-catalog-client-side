import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Books from '../components/ui/Books';
import BookDetails from '../pages/BookDetails';
import PrivateRoute from './PrivateRoute';
import EditBook from '../pages/EditBook';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';

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
        path: '/books',
        element: <Books />,
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