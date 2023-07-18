import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken/useToken';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [loginUseremail, setLoginUseremail] = useState('');
  const { login, googleSignIn } = useContext(AuthContext);
  const [token] = useToken(loginUseremail);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(data.email);
        setLoginUseremail(data.email);
        user.uid && toast.success('User login successfully');

        setLoginError('');
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="flex bg-[#0A2647] my-5 mx-auto  h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register('email', { required: 'Email Address is required' })}
              aria-invalid={errors.email ? 'true' : 'false'}
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
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register('password', {
                required: 'Password is required',
              })}
              aria-invalid={errors.password ? 'true' : 'false'}
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
          {loginError && (
            <p className="text-orange-500 font-semibold">
              Wrong email or Password!!
            </p>
          )}
          <label className="label">
            <span className="label-text">
              New to doctors portal!{' '}
              <Link to="/signup" className="text-secondary">
                Create New Account.
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
