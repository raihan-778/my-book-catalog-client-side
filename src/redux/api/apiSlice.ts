import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ['reviews', 'books', 'auth'],
  endpoints: () => ({}),
});

// api slice with access token

// type CustomFetchBaseQueryError = FetchBaseQueryError & {
//   originalStatus: number;
// };

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:5000/api/v1',
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as { auth: { token: string } }).auth.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (
//   args: string | FetchArgs,
//   api: BaseQueryApi,
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   extraOptions: {}
// ) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if ((result?.error as CustomFetchBaseQueryError)?.originalStatus === 403) {
//     console.log('sending refresh token');
//     // send refresh token to get new access token
//     const refreshResult = await baseQuery('/refresh-token', api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult?.data) {
//       const user = (api.getState() as { auth: { user: string } }).auth.user;
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       // retry the original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }

//   return result;
// };

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: baseQueryWithReauth,
//   tagTypes: ['reviews', 'books'],
//   endpoints: () => ({}),
// });
