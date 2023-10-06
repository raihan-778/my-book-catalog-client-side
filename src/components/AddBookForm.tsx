import * as React from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

import { useAddNewBookMutation } from '../redux/features/books/bookApi';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type AddBookFormProps = React.HTMLAttributes<HTMLDivElement>;
interface AddBookFormInputs {
  title: string;
  author: string;
  genre: string;
  publication: number;
  img: string;
  comments: string[];
}

export function AddBookForm({ className, ...props }: AddBookFormProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddBookFormInputs>();

  const [addBook] = useAddNewBookMutation();
  const onSubmit = async (data: AddBookFormInputs) => {
    const result = await addBook(data);
    toast.done('Book Added Successfully!');
    if (result) {
      reset();
      navigate('/');
    }
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Title
            </Label>
            <Input
              id="title"
              placeholder="type book title"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('title', { required: 'Title is required!' })}
            />
            {errors.title && <p>{errors.title.message}</p>}
            <Input
              id="author"
              placeholder="type author name"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('author', { required: 'author is required!' })}
            />
            {errors.author && <p>{errors.author.message}</p>}
            <Input
              id="genre"
              placeholder="type genre"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('genre', { required: 'genre is required!' })}
            />
            {errors.genre && <p>{errors.genre.message}</p>}
            <Input
              id="publication"
              placeholder="type publication"
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
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('img', {
                required: 'image is required!',
              })}
            />
            {errors.img && <p>{errors.img.message}</p>}
            {/* <Input
              id="comments"
              placeholder="type comment (optional)"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register("comments")}
            /> */}
          </div>
          <Button>Add Book</Button>
        </div>
      </form>
    </div>
  );
}
