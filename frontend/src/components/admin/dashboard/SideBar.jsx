import { NavLink } from "react-router";
import { FiHome, FiUsers, FiBook, FiBarChart2, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const links = [
    { to: "/", label: "Dashboard", icon: <FiHome /> },
    { to: "/users", label: "Users", icon: <FiUsers /> },
    { to: "/courses", label: "Courses", icon: <FiBook /> },
    { to: "/analytics", label: "Analytics", icon: <FiBarChart2 /> },
    { to: "/settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 bg-indigo-600 text-white flex flex-col h-screen">
      <div className="p-6 text-2xl font-bold border-b border-indigo-500">
        NeuroLingua
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md transition ${
                isActive ? "bg-indigo-600" : "hover:bg-indigo-800"
              }`
            }
          >
            <span className="mr-3 text-lg">{icon}</span> {label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-indigo-600 text-sm">
        © 2025 NeuroLingua
      </div>
    </aside>
  );
};

export default Sidebar;
