import React, { useState } from "react";
import {
  Home,
  BarChart2,
  TrendingUp,
  DollarSign,
  Server,
  ShoppingCart,
  Users,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const menus = [
    { name: "Executive", icon: <Home size={20} />, path: "/" },
    { name: "Sales", icon: <BarChart2 size={20} />, path: "/sales" },
    { name: "Marketing", icon: <TrendingUp size={20} />, path: "/marketing" },
    { name: "Finance", icon: <DollarSign size={20} />, path: "/finance" },
    { name: "SaaS", icon: <Server size={20} />, path: "/saas" },
    { name: "Ecommerce", icon: <ShoppingCart size={20} />, path: "/ecommerce" },
    { name: "Support", icon: <Users size={20} />, path: "/support" },
    { name: "Projects", icon: <ClipboardList size={20} />, path: "/project" },
  ];

  return (
    <motion.div
      animate={{ width: open ? 240 : 80 }}
      className="bg-white shadow-xl h-full flex flex-col relative transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-6 bg-primary text-white p-1 rounded-full"
      >
        {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className="flex items-center gap-2 px-4 py-5 border-b">
        <div className="w-8 h-8 bg-primary rounded-md" />
        {open && <h1 className="text-xl font-semibold">CorpDash</h1>}
      </div>

      <nav className="mt-4 flex flex-col space-y-1">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-neutral rounded-md transition ${
                isActive ? "bg-blue-100 text-primary font-semibold" : ""
              }`
            }
          >
            {menu.icon}
            {open && <span>{menu.name}</span>}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
}

export default Sidebar;
