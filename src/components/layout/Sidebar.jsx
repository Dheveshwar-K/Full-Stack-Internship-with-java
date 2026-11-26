
import {
  LayoutDashboard,
  ClipboardList,
  Wrench,
  Users,
  Building2,
  ChartColumnIncreasing,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Issues", path: "/issues", icon: ClipboardList },
  { name: "Work Orders", path: "/work-orders", icon: Wrench },
  { name: "Technicians", path: "/technicians", icon: Users },
  { name: "Facilities", path: "/facilities", icon: Building2 },
  { name: "Analytics", path: "/analytics", icon: ChartColumnIncreasing },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-5">
      <h1 className="text-2xl font-bold mb-8 text-teal-400">
        FixFlow
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
