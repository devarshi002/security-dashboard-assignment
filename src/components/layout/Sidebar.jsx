import { NavLink } from "react-router-dom";

const navItems = [
  "Dashboard",
  "Projects",
  "Scans",
  "Schedule",
  "Notifications",
  "Settings",
  "Support",
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-[#1A1A1A] p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-primary mb-10">aps</h1>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Dashboard" ? "/dashboard" : "#"}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-primary/10"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>admin@edu.com</p>
        <p className="text-xs">Security Lead</p>
      </div>
    </aside>
  );
}