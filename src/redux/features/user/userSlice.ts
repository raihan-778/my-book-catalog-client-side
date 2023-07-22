import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import { toast } from 'react-toastify';

interface IUserState {
  user: {
    email: string | null;
    name?: {
      firstName: string | null;
      lastName: string | null;
    };
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

interface ICredential {
  email: string;
  password: string;
}
interface UserData {
  email: string | null;
  name?: {
    firstName: string | null;
    lastName: string | null;
  };
}

interface StateType {
  user: UserData | null;
  isLoading: boolean;
}

const googleProvider = new GoogleAuthProvider();

export const createUser = createAsyncThunk(
  'user/create-user',
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const loginUser = createAsyncThunk(
  'user/login-user',
  async ({ email, password }: ICredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
    data.user.email &&
      toast.success(`User ${data.user?.email} login Successfully`);

    return data.user.email;
  }
);
export const googleLoginUser = createAsyncThunk(
  'user/google-login-user',
  async () => {
    const data = await signInWithPopup(auth, googleProvider);
    data.user.email &&
      toast.success(`User ${data.user?.email} login Successfully`);
    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: StateType, action: PayloadAction<UserData | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload; // here "action.payload" will get the return value from "createUser" function. so we must return the "createUser" function
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload; // here "action.payload" will get the return value from "createUser" function. so we must return the "createUser" function
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
//handle observer
