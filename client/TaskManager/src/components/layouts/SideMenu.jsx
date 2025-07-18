import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA, SIDE_MENU_USER_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const [sideMenuData, setSideMenuData] = useState([]);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      setSideMenuData(user?.role === "admin" ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA);
    }
  }, [user]);

  return (
    <div className="w-64 h-[calc(100vh-61px)] border-r border-gray-200/50 sticky top-[61px] z-20 overflow-y-auto">
      <div className="flex flex-col items-center pt-6 pb-4 border-b border-gray-200/50">
        <div className="relative mb-2">
          <img
            src={user?.profileImageUrl || ""}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border border-gray-200/50"
          />
        </div>

        {user?.role === "admin" && (
          <div className="text-[10px] font-medium text-shadow-white bg-[#1368EC] px-3 py-0.5 rounded mt-1">
            Admin
          </div>
        )}

        <h5 className="text-shadow-white font-semibold mt-2">
          {user?.name || ""}
        </h5>
        <p className="text-[12px] text-gray-300">{user?.email || ""}</p>
      </div>

      <div className="mt-4 px-2">
        {sideMenuData.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg ${activeMenu === item.label
              ? "text-white bg-gradient-to-r from-blue-50/40 to-blue-100/50 border-2"
              : "text-gray-300 hover:bg-gray-800"
              } py-3 px-4 mb-2 transition-colors`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-lg" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;