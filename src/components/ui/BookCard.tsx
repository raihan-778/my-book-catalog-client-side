import { Link } from 'react-router-dom';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApi';
import { IBook } from '../../types/globalTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setCategoryFilter,
  setSearchQuery,
} from '../../redux/features/books/bookSlice';

export default function BookCard() {
  const { data } = useGetAllBooksQuery(undefined);

  const { categoryFilter, searchQuery } = useAppSelector(
    (state) => state.filter
  );

  const dispatch = useAppDispatch();

  const handleCategoryChange = (event: { target: { value: unknown } }) => {
    dispatch(setCategoryFilter(event.target.value));
  };

  const handleSearchChange = (event: { target: { value: unknown } }) => {
    dispatch(setSearchQuery(event.target.value));
  };
  return (
    <>
      <input
        className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
        id="search"
        value={searchQuery}
        onChange={handleSearchChange}
        type="search"
        placeholder="Search website..."
      />
      <select
        value={categoryFilter}
        onChange={handleCategoryChange}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="" disabled selected>
          Search by term
        </option>
        <option value="genre">genre</option>
        <option value="publicationYear">publicationYear</option>
      </select>
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
