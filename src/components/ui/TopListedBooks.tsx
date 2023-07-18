import { Link } from 'react-router-dom';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApi';
import { IBook } from '../../types/globalTypes';

export default function TopListedBooks() {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-3 ">
      {data?.data?.map((book: IBook) => (
        <div className="p-2 flex bg-[#e2e9f1] w-[200px] rounded-md h-30 mx-auto justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-200   border-slate-100 border items-center">
          <figure className="w-[60px] h-auto mx-auto justify-center items-center rounded-xl">
            <img
              className="rounded-sm h-auto w-full"
              src={book?.image}
              alt="pc"
            />
          </figure>
          <div>
            <Link key={book?._id} to={`/books/${book?._id}`}>
              <h6 className="mx-2">{book?.title}</h6>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
