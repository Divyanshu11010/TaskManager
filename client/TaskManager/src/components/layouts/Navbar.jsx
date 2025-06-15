import React, { useState } from 'react';
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0">
        <button
          className="block lg:hidden text-black"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>

        <h2 className="text-lg font-medium text-black">Task Manager</h2>
      </div>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className="fixed top-[61px] left-0 w-[250px] h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out lg:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </>
  );
};

export default Navbar;
