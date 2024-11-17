import React from "react";
import { NavLink } from "react-router-dom";

const themeStyles = {
  default: "text-[#374151] bg-white",
  active: "text-primary-500 bg-primary-50",
};

const MenuItem = ({ menuItem }) => {
  return (
    <NavLink
        to={menuItem.url}
        className={({ isActive }) => [
          isActive ? themeStyles.active : themeStyles.default,
          `flex items-center w-full px-3 py-[10px] rounded-lg gap-2 text-start transition-all hover:bg-primary-50 active:bg-gray-50 active:bg-opacity-80 hover:opacity-80 outline-none`,
        ].join(" ")}
      >
        <div class="grid place-items-center mr-4">
          {menuItem.icon}
        </div>
        <p className="text-xs font-semibold uppercase">{menuItem.title}</p>
      </NavLink>
  );
};

const SidePanel = ({ children, menuItems }) => {
  const renderMenuItems = (menuItems) => {
    return menuItems?.length > 0 && menuItems.map((item, _id) => (
      <MenuItem menuItem={item} />
    ));
  };

  return (
    <>
      <div class="relative flex flex-col bg-clip-border bg-white text-gray-700 h-[calc(100vh-65px)] min-w-[15rem] p-5 gap-5 border-r border-[#E5E7EB">
        <button class="px-5 py-[10px] rounded-lg border border-[#D1D5DB] hover:bg-blue-50 hover:bg-opacity-80">
          <p class="text-sm antialiased font-medium text-[#111827] text-center">
            My Townhall
          </p>
        </button>
          <div className="quest-group">
            <p className="text-[10px] px-3 font-medium text-[#9CA3AF]">Quest</p>
            <div className="flex flex-col quest-section gap-1">
              {renderMenuItems(menuItems.questMenuItems)}
            </div>
          </div>
          <div className="admin-group">
          <p className="text-[10px] px-3 font-medium text-[#9CA3AF]">Admin</p>
            <div className="flex flex-col quest-section gap-1">
              {renderMenuItems(menuItems.adminMenuItems)}
            </div>
          </div>
        {children}
      </div>
    </>
  );
};

export default SidePanel;
