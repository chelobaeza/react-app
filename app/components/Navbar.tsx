import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useAuth } from "../providers/authProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { User, LogOut, Settings } from "lucide-react";
import { Button } from "./Button";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navItems = {
    home: { label: "Explore Routines", to: "/" },
    myRoutines: { label: "Mis Rutinas", to: "/my-routines" },
    myAccount: { label: "Mi Cuenta", to: "/account" },
    login: { label: "Iniciar Sesión", to: "/login" },
    logout: { label: "Cerrar Sesión", to: "/logout" },
    register: { label: "Registarse", to: "/register" },
  };

  return (
    <nav className="bg-white shadow mb-8">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-primary">PhysioApp</span>
            </Link>
          </div>
        <div className="flex items-center space-x-4">
          {
            <NavLink
              key={navItems.home.to}
              to={navItems.home.to}
              className={({ isActive }) =>
                `px-3 py-2 text-foreground hover:text-primary transition-colors ${
                  isActive ? "text-accent" : "text-gray-700"
                }`
              }
              // end={item.to === "/"}
            >
              {navItems.home.label}
            </NavLink>
          }
          {user ? (
            <>
              <NavLink
                to={navItems.myRoutines.to}
                key={navItems.myRoutines.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-foreground hover:text-primary transition-colors ${
                    isActive ? "text-accent" : "text-gray-700"
                  }`
                }
              >
                {navItems.myRoutines.label}
              </NavLink>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative mt-1 h-8 w-8 rounded-full bg-background text-foreground"
                  >
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 border-border outline-ring/50" align="end" forceMount>
                  <DropdownMenuItem asChild>
                    <Link to="/account" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>{navItems.myAccount.label}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{navItems.logout.label}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <NavLink to={navItems.login.to}>{navItems.login.label}</NavLink>
              </Button>
              {/* <Button asChild>
                <NavLink to={navItems.register.to}>{navItems.register.label}</NavLink>
              </Button> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
