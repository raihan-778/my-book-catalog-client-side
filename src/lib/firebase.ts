import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyALCtduA1ZA7hXjnXqN__W8gOhL9TGZ0y4',
  authDomain: 'my-book-catalog-7fcdb.firebaseapp.com',
  projectId: 'my-book-catalog-7fcdb',
  storageBucket: 'my-book-catalog-7fcdb.appspot.com',
  messagingSenderId: '409642463129',
  appId: '1:409642463129:web:8013904b11ed9b46726d08',
};
console.log('book-catalog', firebaseConfig.apiKey);
const app = initializeApp(firebaseConfig);
// console.log(app);

export const auth = getAuth(app);
