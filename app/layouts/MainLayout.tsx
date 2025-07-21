import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';


const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 text-black">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
