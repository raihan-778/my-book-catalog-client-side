import BookCard from './BookCard';

export default function Books() {
  return (
    <div>
      <div className="my-20 shadow-lg bg-[rgb(250,250,250)] mx-auto rounded-xl">
        <h2 className="text-3xl font-bold py-10 text-indigo-700">All Books</h2>

        <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
          <BookCard />
        </div>
      </div>
    </div>
  );
}
