import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="w-full p-3">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
