import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 392) {
      setFix(true);
    }
    setFix(false);
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
              <Link to="/allproducts">
                <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                  All Books
                </button>
              </Link>
              <Link to="/blog">
                <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                  Login
                </button>
              </Link>
            </ul>
          </div>
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src="https://i.ibb.co/NNNYxtS/logo.jpg" alt="logo" />
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
              <Link to="/allproducts">
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg "></button>
                All Books
              </Link>
            </li>

            <li>
              <Link to="/blog">
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg "></button>
                Blog
              </Link>
            </li>

            {/* {user?.email ? (
              <li>
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                  <Link to="/dashboard" className="justify-between">
                    Dashboard
                  </Link>
                </button>
              </li>
            ) : (
              <li>
                <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            )} */}
          </ul>
        </div>
        {/* <div className="navbar-end">
          {user?.email && (
            <>
              <div className="badge badge-outline">{user?.email}</div>
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
}
