import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/features/user/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Navbar() {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 392) {
      setFix(true);
    }
    setFix(false);
  };

  const user = useAppSelector((state) => state.user);
  console.log(user?.email);
  const dispatch = useAppDispatch();
  const handlaLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  window.addEventListener('scroll', setFixed);
  return (
    <div className={fix ? `fixed` : undefined}>
      <div className={'navbar bg-[#ECECEC] shadow-xl text-sky-400'}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-[#ECECEC] dropdown-content mt-3 p-2 shadow text-slate-600 rounded-box w-52"
            >
              <Link to="/">
                <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                  Home
                </button>
              </Link>
              <Link to="/books">
                <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                  All Books
                </button>
              </Link>
              {user?.email ? (
                <li>
                  <button
                    onClick={handlaLogout}
                    className="btn-sm btn-outline btn-accent mx-2 rounded-lg "
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                    <Link to="/login">Login</Link>
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src="/book-logo.jpg" alt="logo" />
            </div>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case font-semibold text-2xl"
          >
            MBC
            <sub className="text-green-500">
              <small>My Book Catalog</small>
            </sub>
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                  Home
                </button>
              </Link>
            </li>

            <li>
              <Link to="/books">
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                  All Books
                </button>
              </Link>
            </li>

            {user?.email ? (
              <li>
                <button
                  onClick={handlaLogout}
                  className="btn-sm btn-outline btn-accent mx-2 rounded-lg "
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
