import { Link } from 'react-router-dom';

export default function BookCard() {
  return (
    <div className="card w-full transition hover:-translate-y-3  hover:all ease-in-out mx-auto card-compact bg-[#e2e9f1] text-slate-500 shadow-xl">
      <figure className="rounded-xl mt-3 p-3">
        <img
          src="/public/11_e272e529-4c81-454b-b9ff-99dcfba814f1_1024x1024.webp"
          className="h-[200px] w-full rounded-xl p-3"
          alt="book"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">title:{'title'}</h2>
        <h6 className="text-xl font-semibold text-teal-600">Genre{'genre'}</h6>

        <p>Published Date: {'publishedDate'}</p>
        <p className="badge badge-secondary">Author: {'author'}</p>

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
  );
}
