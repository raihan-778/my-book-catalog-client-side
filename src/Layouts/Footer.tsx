import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaRegEnvelopeOpen,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <section className=" text-slate-600 bg-[#FFFBF5] rounded-xl">
        <div className="bg-[#408ED4] text-slate-50  grid gap-y-2.5 grid-cols-1  lg:grid-cols-2 lg:gap-4 mx-auto h-46 lg:h-24 ">
          <div className="flex justify-center mx-3 lg:justify-end  mt-5">
            <FaRegEnvelopeOpen className="text-5xl mr-2"></FaRegEnvelopeOpen>
            <div className="text-left">
              <h2>Sign Up For Our Newsletter</h2>
              <p>Get e-mail updates about our all news & exclusive offers</p>
            </div>
          </div>

          <fieldset className="w-full mx-auto mb-5 lg:w-1/4 md:w-1/2 space-y-1 flex justify-center  dark:text-gray-100">
            <div className="flex max-w-md justify-start md:justify-center mt-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your email address"
                className="flex flex-1 text-right px-5 h-10 lg:rounded-l-full rounded-l-lg sm:text-sm  text-gray-600 bg-gray-100 "
              />
              <span className="flex items-center px-3 h-10 pointer-events-none sm:text-sm lg:rounded-r-full rounded-r-lg bg-yellow-300">
                <button className="btn-sm text-slate-600 font-semibold bg-yellow-300">
                  Subscribe
                </button>
              </span>
            </div>
          </fieldset>
        </div>
        <footer className="footer p-5 rounded-xl ">
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold  text-[#0014FF] ">
              Our Services
            </span>
            <Link to="/" className="link link-hover">
              Ontime Delivery
            </Link>
            <Link to="/" className="link link-hover">
              Best Quality Products
            </Link>
            <Link to="/" className="link link-hover">
              Trusted seller
            </Link>
            <Link to="/" className="link link-hover">
              Customers Setisfection
            </Link>
          </div>
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold text-[#0014FF]">
              About ReliableTech
            </span>
            <Link to="/" className="link link-hover">
              Company Info
            </Link>
            <Link to="/" className="link link-hover">
              Investors
            </Link>
            <Link to="/" className="link link-hover">
              Career
            </Link>
          </div>
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold  text-[#0014FF]">
              Stay Connected
            </span>
            <div className="grid grid-cols-4 mx-auto gap-2">
              <Link to="/" className="link link-hover">
                <FaFacebookSquare className="lg:text-2xl md:text-2xl text-xl text-[#408ED4]   transition hover:scale-110 hover:text-[#FC7300] hover:all ease-in-out   "></FaFacebookSquare>
              </Link>
              <Link to="/" className="link link-hover">
                <FaLinkedin className="lg:text-2xl md:text-2xl text-xl text-[#555555]    transition hover:scale-110 hover:text-[#FC7300]  hover:all ease-in-out "></FaLinkedin>
              </Link>
              <Link to="/" className="link link-hover">
                <FaTwitterSquare className="lg:text-2xl md:text-2xl text-xl text-[#00BFF3]   transition hover:scale-110 hover:text-[#FC7300]  hover:all ease-in-out  "></FaTwitterSquare>
              </Link>
              <Link to="/" className="link link-hover">
                <FaInstagram className="lg:text-2xl md:text-2xl text-xl text-[#D02D2D]  transition hover:scale-110  hover:all hover:text-[#FC7300]  ease-in-out "></FaInstagram>
              </Link>
            </div>
          </div>
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold  text-[#0014FF]">
              Our Address
            </span>
            <Link to="/" className="link link-hover">
              Citygate, Chittagong, Bangladesh.
            </Link>
            <Link to="/" className="link link-hover">
              <strong>Phone Number:</strong> +8801945433032
            </Link>
            <Link to="/" className="link link-hover">
              <strong>Email:</strong> raihanarif778@gmail.com
            </Link>
          </div>
        </footer>
      </section>
    </>
  );
}
