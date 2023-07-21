import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../redux/hooks';
import { createUser, googleLoginUser } from '../redux/features/user/userSlice';

interface SignupFormInputs {
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    dispatch(
      createUser({
        email: data.email,
        password: data.password,
      })
    );
  };

  const googleLogin = () => {
    dispatch(googleLoginUser());
  };

  return (
    <div className="flex bg-[#0A2647] mx-auto my-5 h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Sign Up</h2>
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
          <label className="label">
            <span className="label-text">
              Already have an accoutn!{' '}
              <Link to="/login" className="text-secondary">
                Login here.
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
