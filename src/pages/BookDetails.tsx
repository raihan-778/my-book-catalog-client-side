import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import BookReview from '../components/BookReview';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from '../components/ui/use-toast';
import {
  useDeleteBookMutation,
  useEditBookMutation,
  useSingleBookQuery,
} from '../redux/features/books/bookApi';

interface AddBookFormInputs {
  title: string;
  author: string;
  genre: string;
  publication: number;
  img: string;
}
export default function BookDetails() {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);

  console.log('single-book', book?.data.title);
  const [deleteBook] = useDeleteBookMutation();
  const [bookEdit] = useEditBookMutation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddBookFormInputs>();
  const onSubmit = async (data: AddBookFormInputs) => {
    const result = await bookEdit({ id, data });
    if (result) {
      toast({
        description: `${book?.data?.title} is edited Successfully!`,
      });
      setIsModalOpen(false);
      reset();
    }
  };
  const handleDeleteBook = async () => {
    try {
      const result = await deleteBook(id);
      console.log(result);

      toast({
        description: 'Book Deleted Successfully!',
      });
      navigate('/');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <>
      <div className="flex w-10/12 mx-auto items-center pb-4 border-b-4 border-gray-300 gap-6">
        <div className="w-[50%]">
          <img src={book?.data?.img} alt={book?.data?.title} />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Title: {book?.data?.title}</h1>
          <p className="text-xl">Author: {book?.data?.author}</p>
          <p className="text-xl">Genre: {book?.data?.genre}</p>
          <p className="text-xl">
            Publication Date: {book?.data?.publicationDate}
          </p>
          <div className="flex w-4/12 gap-4">
            <Button onClick={() => setIsModalOpen(true)}>Edit</Button>
            <Button
              className="bg-red-500 hover:bg-black"
              onClick={handleDeleteBook}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-xl font-medium pt-4">
          All Reviews about this Book
        </h1>
        <ul className="space-y-2 text-lg my-4">
          {book?.comment?.length ? (
            book?.comment?.map((comments: string, index: number) => (
              <li key={index}>
                {index + 1}. {comments}
              </li>
            ))
          ) : (
            <h1 className="mt-6 text-xl">No Reviews yet!</h1>
          )}
        </ul>
      </div>
      {<BookReview id={id!} />}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="w-10/12 mx-auto p-20 bg-white border-2 border-black rounded-xl"
      >
        <div className="flex justify-center my-4">
          <h3 className="font-bold text-lg ">Edit Book: {book?.title} </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Title
              </Label>
              <Input
                id="title"
                placeholder="type book title"
                defaultValue={book?.title}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('title', { required: 'Title is required!' })}
              />
              {errors.title && <p>{errors.title.message}</p>}
              <Input
                id="author"
                placeholder="type author name"
                defaultValue={book?.author}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('author', { required: 'author is required!' })}
              />
              {errors.author && <p>{errors.author.message}</p>}
              <Input
                id="genre"
                placeholder="type genre"
                defaultValue={book?.genre}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('genre', { required: 'genre is required!' })}
              />
              {errors.genre && <p>{errors.genre.message}</p>}
              <Input
                id="publication"
                placeholder="type publication"
                defaultValue={book?.publication}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('publication', {
                  required: 'publication is required!',
                })}
              />
              {errors.publication && <p>{errors.publication.message}</p>}
              <Input
                id="image"
                placeholder="type image url"
                defaultValue={book?.img}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('img', {
                  required: 'image is required!',
                })}
              />
              {errors.img && <p>{errors.img.message}</p>}
            </div>
            <Button className="w-2/12 mx-auto">Edit</Button>
          </div>
        </form>
        <div className="modal-action">
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
