import { Link } from 'react-router-dom';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApi';
import { IBook } from '../../types/globalTypes';

export default function BookCard() {
  const { data } = useGetAllBooksQuery(undefined);
  return (
    <>
      {data?.data?.map((book: IBook) => (
        <div className="card w-full transition hover:  hover:all ease-in-out mx-auto card-compact bg-[#e2e9f1] text-slate-500 shadow-xl">
          <figure className="rounded-xl mt-3 p-3">
            <img
              src={book?.image}
              className="h-[200px] w-full rounded-xl p-3"
              alt="book"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">title:{book?.title}</h2>
            <h6 className="text-xl font-semibold text-teal-600">
              Genre{book?.genre}
            </h6>

            <p>Published Date: {book?.publicationDate}</p>
            <p className="badge badge-secondary">Author: {book?.author}</p>

            <div className="card-actions justify-end">
              <Link to="/categories">
                {' '}
                <label htmlFor="booking-modal" className="btn btn-primary">
                  Book Details
                </label>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
