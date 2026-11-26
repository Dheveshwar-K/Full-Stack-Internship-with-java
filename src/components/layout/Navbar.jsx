
import { Search, Bell, Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-5 md:px-8">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        <h2 className="font-semibold text-lg text-slate-800">
          Facility Management
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center bg-slate-100 px-3 rounded-lg">
          <Search size={18} className="text-slate-500" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none p-2 w-40"
          />
        </div>

        <button className="relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-semibold">
          DK
        </div>
      </div>
    </header>
  );
}
