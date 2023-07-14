import MainLayout from './Layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <MainLayout />
      </div>
    </>
  );
}

export default App;
