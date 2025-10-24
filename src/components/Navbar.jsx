import React from "react";
import { UserCircle } from "lucide-react";

function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 font-medium">Admin</span>
        <UserCircle size={28} className="text-gray-500" />
      </div>
    </div>
  );
}

export default Navbar;
