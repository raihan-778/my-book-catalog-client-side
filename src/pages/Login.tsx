import { useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useForm } from 'react-hook-form';
import {
  googleLoginUser,
  loginUser,
  setLoading,
  setUser,
} from '../redux/features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { toast } from 'react-toastify';

// if (user) {
//   navigate(from, { replace: true });
// }

interface LoginFormInputs {
  email: string;
  password: string;
}
// if (user) {
//   navigate(from, { replace: true });
// }

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(
      loginUser({
        email: data.email,
        password: data.password,
      })
    );
  };
  const googleLogin = () => {
    dispatch(googleLoginUser());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        toast.success(`User ${user?.email} login Successfully`);
        console.log(user);
        navigate(from, { replace: true });
        dispatch(setUser(user as unknown as string));
      }

      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch, from, navigate]);

  return (
    <div className="flex bg-[#0A2647] my-5 mx-auto  h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />

            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register('password', { required: 'Password is required' })}
            />

            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <label className="label">
            <span className="label-text">Forgot Password?</span>
          </label>

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Login"
            type="submit"
          />

          {errors && (
            <p className="text-orange-500 font-semibold">
              Wrong email or Password!!
            </p>
          )}

          <label className="label">
            <span className="label-text">
              New to My Book Catalog
              <Link to="/signup" className="text-secondary">
                Create New Account.
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <button onClick={googleLogin} className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
}
