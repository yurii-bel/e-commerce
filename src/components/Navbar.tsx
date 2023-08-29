import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Summary from "./Summary";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  // const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart);
  const totalItems = cartItems.reduce((acc, item) => item.quantity + acc, 0);

  return (
    <>
      <nav className="z-99 sticky top-0 py-2 backdrop-blur-sm bg-black/80">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* <div className="text-white font-semibold text-lg pl-4">e-commerce</div> */}
          <ul className="flex justify-center items-center space-x-4 pr-4">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "white",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "white",
                })}
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "white",
                })}
              >
                About
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggleDrawer}
            className="relative text-white text-lg p-2 bg-blue-500 rounded-full"
          >
            <AiOutlineShoppingCart />
            <span className="absolute top-6 -right-1 text-center bg-red-500 text-white text-xs rounded-full w-4 h-4">
              {totalItems}
            </span>
          </button>
        </div>
        {/* {drawerOpen && (
          <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        )} */}
      </nav>
      <Summary isOpen={drawerOpen} handleClose={toggleDrawer} />
    </>
  );
};

export default Navbar;
