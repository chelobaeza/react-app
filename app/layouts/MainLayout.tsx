import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { AuthProvider } from "~/providers/authProvider";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AuthProvider>
        <Navbar />
        <main className="flex-1 text-black">
          <Outlet />
        </main>
      </AuthProvider>
    </div>
  );
};

export default MainLayout;
