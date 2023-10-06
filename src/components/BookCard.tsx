import { Link } from 'react-router-dom';
import { allBooks } from '../redux/features/books/bookSlice';
import { useAppDispatch } from '../redux/hooks';
import { IBook } from '../types/globalTypes';
import { Button } from './ui/button';

interface IProps {
  book: IBook;
}
export default function BookCard({ book }: IProps) {
  const dispatch = useAppDispatch();
  dispatch(allBooks());
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 px-4 py-4 mb-4 mx-4 my-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="flex space-x-2">
        <div className="flex flex-col space-y-1">
          <h2 className="mb-1 text-xl font-semibold">{book.title}</h2>
        </div>
      </div>
      <div>
        <img
          src={book?.image}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-normal">Author: {book?.author}</h2>
        <p className="text-sm dark:text-gray-400">Genre: {book?.genre}</p>
        <p className="text-sm dark:text-gray-400">
          Publication Year: {book?.publicationDate}
        </p>
      </div>
      <Button className="mt-10" asChild>
        <Link to={`/singleBook/${book._id}`}>View Details</Link>
      </Button>
    </div>
  );
}
