import { IBook } from '../../../types/globalTypes';
import { api } from '../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => '/books?publicationDate=desc',
      providesTags: [{ type: 'books' }],
    }),
    getAllBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: [{ type: 'books' }, 'reviews'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'books' }],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [{ type: 'books' }],
    }),
    addNewBook: builder.mutation<IBook, Partial<IBook>>({
      query: (newBook) => ({
        url: '/books/add-new-book',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: [{ type: 'books' }],
    }),
    postReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `/reviews/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    getReview: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ['reviews'],
    }),
  }),
});
export const {
  useGetRecentBooksQuery,
  useGetAllBooksQuery,
  useSingleBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useAddNewBookMutation,
} = bookApi;
