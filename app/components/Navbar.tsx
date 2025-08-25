import React from "react";
import { NavLink, useLocation } from "react-router";

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Explore Routines", to: "/" },
    { label: "My Routines", to: "/my-routines" },
  ];

  return (
    <nav className="bg-white shadow mb-8">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-lg text-emerald-custom">PhysioApp</span>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-100 text-emerald-custom"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
