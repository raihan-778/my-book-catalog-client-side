/* eslint-disable @typescript-eslint/no-unused-vars */
import { signOut } from 'firebase/auth';
import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/images/logo.book-store.avif';
import Cart from '../components/Cart';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avater';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { auth } from '../lib/firebase';
import { setUser } from '../redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success('Successfully Logout');
      dispatch(setUser(null));
    });
  };
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <img className="h-20" src={logo} alt="logo" />
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/all-books">All Books</Link>
                </Button>
              </li>
              {!user?.email ? (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/signup">Signup</Link>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/add-book">Add Book</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild onClick={handleLogout}>
                      <Link to="/">Logout</Link>
                    </Button>
                  </li>
                </>
              )}
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    {!user.email ? (
                      <>
                        <Link to="/login">
                          <DropdownMenuItem className="cursor-pointer">
                            Login
                          </DropdownMenuItem>
                        </Link>
                        <Link to="/signup">
                          <DropdownMenuItem className="cursor-pointer">
                            Signup
                          </DropdownMenuItem>
                        </Link>
                      </>
                    ) : (
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="cursor-pointer"
                      >
                        Logout
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
